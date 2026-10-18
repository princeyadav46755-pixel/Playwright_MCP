import { LoginPage } from "../Pages/LoginPage";
import{test as base} from '@playwright/test'

    type MyFixtures ={
    loginPage:LoginPage

    }
 
     export const test =base.extend<MyFixtures>({
        loginPage:async({page},use)=>{
            const login:LoginPage= new LoginPage(page)
            await use(login)

        }

     })
