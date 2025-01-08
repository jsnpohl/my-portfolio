import { LightningElement, api } from 'lwc';

export default class ProjectCard extends LightningElement {
    @api appThumb;
    @api projectName;
    @api featureOne;
    @api featureTwo;
    @api featureThree;
}