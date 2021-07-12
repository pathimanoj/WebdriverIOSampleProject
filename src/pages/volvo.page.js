import { click, getListFromWebelements, isElementDisplayed } from "../utils/commands";
import Page from "./page";

class VolvoPage extends Page {

    openApp() {
        return super.open('intl/v/car-safety/a-million-more')
    }

    get acceptBtn() { return $('[title=Accept]') }

    get header() { return $('#site-nav-topbar-wrapper [alt=Volvo]') }
    get moduleIntroHeader() { return $('#ModelIntro-1 h2') }

    get menuIcon() { return $('#sitenav-v2-sidenav-toggle') }
    get menuItems() { return $$('[data-autoid*=sideNavLinksMenuDrawer] em') }
    get menuCloseBtn() { return $('[data-autoid*=siteNavCloseIcon]') }

    get videoelement() { return $('#Video-1 video') }
    get videoSource() { return $('#Video-1 video source') }

    get statementHeader() { return $('#TextStatement-1 section') }
    get statementMenu() { return $$('#IconCallouts-1 div .a em') }
    
    get videoSection() { return  $('#VideoTestimonials-1') } 
    get videoSectionHeader() { return $('#VideoTestimonials-1 h2') }
    get videoSectionSubHeader() { return  $('#VideoTestimonials-1 p') }

    async acceptAlert() {
        if (await isElementDisplayed(this.acceptBtn)) {
            await click(this.acceptBtn)
        }
    }

    async getMenuListItems() {
        await click(this.menuIcon)
        const list = await getListFromWebelements(await this.menuItems);
        await click(this.menuCloseBtn)
        return list;
    }

    async getStatementMenuLItems() {
        await (await this.statementHeader).scrollIntoView()
        const list = await getListFromWebelements(await this.statementMenu);
        return list;
    }


}
export default new VolvoPage()
