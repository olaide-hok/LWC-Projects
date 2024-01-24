import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class Notifications extends LightningElement {

    toastHandlerSuccess() {
        this.showToast('Success!', '{0} Account Created Successfully! {1}','success')
    }

    toastHandlerError() {
        this.showToast('Error!', 'Account Creation Failed!','error')
    }

    toastHandlerWarning() {
        this.showToast('Warning!', 'Password do not match specifications!','warning')
    }

    toastHandlerInfo() {
        this.showToast('Info', 'Please update your password after login','info')
    }

    showToast(title, message, variant) {
        const event = new ShowToastEvent({
            title: title,
            message: message,
            variant: variant,
            messageData: [
                'Salesforce', {
                    url: 'https://salesforce.com',
                    label: 'Click here'
                }
            ]
        })
        this.dispatchEvent(event)
    }
}