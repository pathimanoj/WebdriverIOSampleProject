import VolvoPage from "../../src/pages/volvo.page";
import { PAGE_TITLE } from "../constants/FrameworkConst";

describe('Test volvo car safety', () => {

    beforeEach(async () => {
        await VolvoPage.openApp()
        await VolvoPage.acceptAlert()
    })

    it('should validate homepage title and logo', async () => {
        await expect(browser).toHaveTitle(PAGE_TITLE)
        await expect(VolvoPage.header).toBeDisplayed()

    });
});
