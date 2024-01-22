import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    
    closeHandler () {
        const myCloseEvent = new CustomEvent('close')
        this.dispatchEvent(myCloseEvent)
    }
}