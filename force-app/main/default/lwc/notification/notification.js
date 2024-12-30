import { LightningElement, api } from 'lwc';

export default class Notification extends LightningElement {
    showNotification = false;
    variant
    message

    
    get notificationClasses() {
        let variantClass = this.variant === 'success' ? 'slds-theme_success' : this.variant === 'error' ? 'slds-theme_error' : 'slds-theme_info';
        return `slds-notify slds-notify_toast ${variantClass}`;
    }
    @api
    showToast(message, variant) {
        this.variant = variant || 'info';
        this.message = message || 'Notification Message goes here';
        this.showNotification = true;
        setTimeout(()=>{
            this.showNotification = false;
        }, 5000)
    }
}