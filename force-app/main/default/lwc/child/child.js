import { api, LightningElement } from 'lwc';

export default class Child extends LightningElement {
    @api messageFromParent = "";
    toParentValue = "";
    handleToParentChange(event) {
        this.toParentValue = event.target.value;
    }
    handleToParentSend() {
        const event = new CustomEvent('notifyparent', {detail:{'message':this.toParentValue}});
        this.dispatchEvent(event);
    }
}