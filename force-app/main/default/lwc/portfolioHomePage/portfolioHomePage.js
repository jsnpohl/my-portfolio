import { LightningElement } from 'lwc';
import homeImage from '@salesforce/resourceUrl/portfolioHomeImg';
import adminCert from '@salesforce/resourceUrl/certadmin';


export default class PortfolioHomePage extends LightningElement {
    adminCert = adminCert;
    homeImage = homeImage;
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