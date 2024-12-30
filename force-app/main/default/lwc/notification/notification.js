import { LightningElement, api } from 'lwc';
import FORM_FACTOR from '@salesforce/client/formFactor';

export default class Notification extends LightningElement {
    showNotification = false;
    variant
    message

    get notificationClasses() {
        let variantClass = this.variant === 'success' ? 'success' : this.variant === 'error' ? 'error' : 'info';
        return `slds-notify slds-notify_toast notification-shared-styles ${variantClass}`;
    }
    @api
    showToast(message, variant) {
        if(FORM_FACTOR == 'Large') {
            this.variant = variant || 'info';
            this.message = message || 'Notification Message goes here';
            this.showNotification = true;
            setTimeout(()=>{
                this.showNotification = false;
            }, 4000)
        }  
    }
}