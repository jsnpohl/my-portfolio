import { LightningElement, wire } from 'lwc';
import {
  APPLICATION_SCOPE,
  MessageContext,
  publish,
  subscribe,
  unsubscribe,
} from 'lightning/messageService';
import messageChannel from '@salesforce/messageChannel/CommunicationApp__c';

export default class Parent extends LightningElement {
  subscription = null;
  toChildValue="";
  messageToChild="";
  toStangerValue="";
  messageToStranger="";
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
    if(message.targetComponent == 'Parent') {
      this.messageRecieved = message.message;
    }
  }

  unsubscribeToMessageChannel() {
    unsubscribe(this.subscription);
    this.subscription = null;
  }

  handleToChildChange(event){
    this.toChildValue = event.target.value;
  }

  handleToChildSend(){
    this.messageToChild = this.toChildValue;
  }

  handleToStrangerChange(event){
    this.toStangerValue = event.target.value;
  }

  handleToStrangerSend(){
    const payload = {
      message: this.toStangerValue,
      targetComponent: 'Stranger'
    }
    publish(this.messageContext, messageChannel, payload);
  }

  handleChildToParentNotify(event) {
    this.messageRecieved = event.detail.message;
  }
}