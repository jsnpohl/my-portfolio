import { LightningElement, wire} from 'lwc';
import {
    APPLICATION_SCOPE,
    MessageContext,
    publish,
    subscribe,
    unsubscribe,
} from 'lightning/messageService';
import messageChannel from '@salesforce/messageChannel/CommunicationApp__c';

export default class Stranger extends LightningElement {
    subscription = null;
    toParentValue = "";
    messageRecieved = "";
    
    @wire(MessageContext)
    messageContext;

    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }

    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                messageChannel,
                (message) => this.handleIncomingMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    handleIncomingMessage(message) {
        if(message.targetComponent == 'Stranger') {
            this.messageRecieved = message.message;
        }
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    handleToParentChange(event){
        this.toParentValue = event.target.value;
    }

    handleToParentSend(){
        const payload = {message: this.toParentValue, targetComponent: 'Parent'};
        publish(this.messageContext, messageChannel, payload);
    }
}