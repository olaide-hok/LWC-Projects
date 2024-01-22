import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    
    closeHandler () {
        const myCloseEvent = new CustomEvent('close', {
            bubbles: true,
            detail: 'Modal successfully closed.'
        })
        this.dispatchEvent(myCloseEvent)
        console.log('custom close event fired')
    }

    footerHandler() {
        console.log('footerHandler called')
    }
}