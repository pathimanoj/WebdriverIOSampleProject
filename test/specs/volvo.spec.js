import VolvoPage from "../../src/pages/volvo.page";
import {MODULE_INTRO_HEADER, PAGE_TITLE, STATEMENT_HEADER, TESTIMONIAL_HEADER, TESTIMONIAL_SUBHEADER } from "../constants/FrameworkConst";
import testdata from '../resource/testdata.json'

describe('Test volvo car safety', () => {

    beforeEach(async () => {
        await VolvoPage.openApp()
        await VolvoPage.acceptAlert()
    })

    it('should validate homepage title and logo', async () => {
        await expect(browser).toHaveTitle(PAGE_TITLE)
        await expect(VolvoPage.header).toBeDisplayed()

    });

    it('should validate menu items', async () => {
        expect(await VolvoPage.getMenuListItems()).toEqual(testdata.ListItems.MenuItems)
    });

    it('should validate module intro header', async () => {
        await expect(VolvoPage.moduleIntroHeader).toHaveText(MODULE_INTRO_HEADER)
    });

    it('should validate video behaviour', async () => {
        await expect(VolvoPage.videoelement).toHaveAttribute('autoplay')
        await expect(VolvoPage.videoelement).toHaveAttribute('preload', 'auto')
        await expect(VolvoPage.videoSource).toHaveAttribute('type', 'video/mp4')
    });

    it('should validate statement section', async () => {
        await expect(VolvoPage.statementHeader).toBeDisplayed()
        await expect(VolvoPage.statementHeader).toHaveText(STATEMENT_HEADER)
    })
    
    it('should validate vidoe testimonial section', async () => {
        await expect(VolvoPage.videoSection).toBeDisplayed()
        await expect(VolvoPage.videoSectionHeader).toHaveText(TESTIMONIAL_HEADER)
        await expect(VolvoPage.videoSectionSubHeader).toHaveText(TESTIMONIAL_SUBHEADER)
    })
});
