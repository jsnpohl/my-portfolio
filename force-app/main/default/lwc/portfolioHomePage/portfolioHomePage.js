import { LightningElement } from 'lwc';
import homeImage from '@salesforce/resourceUrl/portfolioHomeImg';
import COCKTAIL_APP_THUMB from "@salesforce/resourceUrl/cocktailAppThumb";
import NOTES_APP_THUMB from "@salesforce/resourceUrl/notesAppThumb";
import COMMUNICATION_APP_THUMB from "@salesforce/resourceUrl/communicationAppThumb";

export default class PortfolioHomePage extends LightningElement {
    homeImage = homeImage;
    resumeLink = 'https://jasonpohl-portfolio-dev-ed.develop.my.salesforce.com/sfc/p/ak00000JQh4o/a/ak0000003Id7/mKwxh8EBRb2y6KMbkIakwRxh8caC7TYwswnP69_KIU0';
    randomCocktailsImage = COCKTAIL_APP_THUMB;
    stickyNotesImage = NOTES_APP_THUMB;
    dataExchangeImage = COMMUNICATION_APP_THUMB;

    projects = [
        {
            name: 'Random Cocktails',
            image: this.randomCocktailsImage,
            feature1: 'Apex + JSON',
            feature2: 'Salesforce APIs',
            feature3: 'LWC, HTML, CSS',
            link: 'https://jasonpohl-portfolio-dev-ed.develop.my.site.com/cocktail-app'
        },
        {
            name: 'Sticky Notes',
            image: this.stickyNotesImage,
            feature1: 'Apex CRUD Operations',
            feature2: 'LWC Lifecycle Hooks',
            feature3: 'LWC refreshApex()',
            link: 'https://jasonpohl-portfolio-dev-ed.develop.my.site.com/notes-app'
        },
        {
            name: 'Data Exchange',
            image: this.dataExchangeImage,
            feature1: 'Parent-Child Communication',
            feature2: 'Custom Events',
            feature3: 'Lightning Messaging Service',
            link: 'https://jasonpohl-portfolio-dev-ed.develop.my.site.com/communication-app'
        }
    ]
    
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