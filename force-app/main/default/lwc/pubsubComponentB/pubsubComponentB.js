import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubsubComponentB extends LightningElement {
    messageFromA
    messageFromInputFieldB
    connectedCallback() {
        this.callSubscriber()
    }
    inputHandlerB(e) {
        this.messageFromInputFieldB = e.target.value
    }
    publishHandlerB() {
        pubsub.publish('componentB', this.messageFromInputFieldB)
    }
    callSubscriber() {
        pubsub.subscribe('componentA', (msg) => {
            this.messageFromA = msg
        })
    }
}