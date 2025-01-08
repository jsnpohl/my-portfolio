import { LightningElement } from 'lwc';
import homeImage from '@salesforce/resourceUrl/portfolioHomeImg';
import adminCert from '@salesforce/resourceUrl/certadmin';
import COCKTAIL_APP_THUMB from "@salesforce/resourceUrl/cocktailAppThumb";
import NOTES_APP_THUMB from "@salesforce/resourceUrl/notesAppThumb";
import COMMUNICATION_APP_THUMB from "@salesforce/resourceUrl/communicationAppThumb";
import { NavigationMixin } from 'lightning/navigation';

export default class PortfolioHomePage extends NavigationMixin(LightningElement) {
    adminCert = adminCert;
    homeImage = homeImage;
    projectOneAppThumb = COCKTAIL_APP_THUMB;
    projectTwoAppThumb = NOTES_APP_THUMB;
    projectThreeAppThumb = COMMUNICATION_APP_THUMB;
    projectOneName = 'Random Cocktails';
    projectOneFeatureOne = 'API Callout';
    projectOneFeatureTwo = 'Apex Response Wrapper';
    projectOneFeatureThree = 'LWC, HTML, CSS';
    projectTwoName = 'Sticky Notes';
    projectTwoFeatureOne = 'Lightning Web Components';
    projectTwoFeatureTwo = 'Apex CRUD Operations';
    projectTwoFeatureThree = 'LWC Lifecycle Hooks';
    projectThreeName = 'Lightning Communication';
    projectThreeFeatureOne = 'Parent to Child Communication';
    projectThreeFeatureTwo = 'Child to Parent Communication';
    projectThreeFeatureThree = 'Unrelated Component Communication';

    handleProjectOneClick() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Cocktail_App__c',
            }
        });
    }
    handleProjectTwoClick() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Notes_App__c',
            }
        });
    }
    handleProjectThreeClick() {
        this[NavigationMixin.Navigate]({
            type: 'comm__namedPage',
            attributes: {
                name: 'Communication_App__c',
            }
        });
    }
    
    handleNavItemClick(event) {
        const navId = event.target.dataset.id;
        const sectionId = navId+'Section';
        const section = this.template.querySelector(`[data-id="${sectionId}"]`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    }
    handleViewWorkClick() {
        const sectionId = 'PortfolioSection';
        const section = this.template.querySelector(`[data-id="${sectionId}"]`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
        }
    }
}