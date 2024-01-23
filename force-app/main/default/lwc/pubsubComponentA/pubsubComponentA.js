import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubsubComponentA extends LightningElement {
    messageFromInputFieldA
    messageFromB
    connectedCallback() {
        this.callSubscriber()
    }
    inputHandlerA(e) {
        this.messageFromInputFieldA = e.target.value
    }
    publishHandlerA() {
        pubsub.publish('componentA', this.messageFromInputFieldA)
    }
    callSubscriber() {
        pubsub.subscribe('componentB', (msg) => {
            this.messageFromB = msg
        })
    }

}