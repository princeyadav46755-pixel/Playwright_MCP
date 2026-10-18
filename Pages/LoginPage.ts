
import { Locator, Page } from "@playwright/test"
import { BaseMethod } from "../utilsLayer/BaseMethod"
// import Data from '../Data/Data.json'

export class LoginPage extends BaseMethod{

    readonly userName:Locator
    readonly password:Locator
    readonly clickOnElement:Locator
    
    constructor(page:Page){
        super(page)
        this.userName=page.locator('#user-name')
        this.password=page.locator('#password')
        this.clickOnElement=page.locator("input[id='login-button']")
    }

    async fillUserName(username:string){
       await this.enterElement(this.userName,username)
    }

    async fillPassword(password:string){
       await this.enterElement(this.password,password)

    }
    async loginButton(){
        await this.clickOn(this.clickOnElement)
    }
}

