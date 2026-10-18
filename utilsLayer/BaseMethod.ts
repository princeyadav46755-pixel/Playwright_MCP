import { Locator, Page } from "@playwright/test";

export class BaseMethod {
    page: Page
 
    constructor(page: Page) {
        this.page = page
        
    }

        
    async openURL(URL: string) {
        await this.page.goto(URL)

    }

    async enterElement(element:Locator,value:string){
     await element.fill(value)
    }

    async clickOn(element:Locator){
        await element.click()
    }
}