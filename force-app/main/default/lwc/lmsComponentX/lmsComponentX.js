import { MessageContext, subscribe, APPLICATION_SCOPE, unsubscribe } from 'lightning/messageService';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import { LightningElement, wire } from 'lwc';

export default class LmsComponentX extends LightningElement {
    recieveMessage
    subscription
    @wire(MessageContext)
    context

    connectedCallback() {
        this.subscribeMessage()
    }

    subscribeMessage(){
        // subscribe(messageContext, messageChannel, listener, subsciberOptions)
       this.subscription = subscribe(this.context, SAMPLEMC, (message) => {this.handleMessage(message)} , {scope: APPLICATION_SCOPE});
    }

    handleMessage(message) {
        this.recieveMessage = message.lmsData.value ? message.lmsData.value : "No message published"
    }

    unsubscribeMessage() {
        unsubscribe(this.subscription)
        this.subscription = ''
    }
}