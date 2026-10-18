
// import TestData from '../Data/Data.json' with {type:'json'}
import { environment } from '../enviroment'
import {test}  from '../Fixtures/BaseFixtures'

// TestData.forEach((data) => {
test('Sauce Demo Verify ',async({loginPage,page})=>{
    await loginPage.openURL(environment.baseUrl)
    await loginPage.fillUserName(environment.userName)
    await loginPage.fillPassword(environment.password)
    await loginPage.loginButton();
     
    await  page.pause();
})




// });