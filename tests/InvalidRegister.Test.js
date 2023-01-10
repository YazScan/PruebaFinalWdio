import homePage from '../pages/home.page';
import registerPage from '../pages/register.page';
import { DATA } from '../data/loginData.json';
import {assert} from 'chai';

const registerData = DATA.registerData; //It is necessary to change the json data for each execution of the test for now! 

describe('Invalid register test',  () => {
    before('Open main page', async () => {
        await homePage.open('/');
        assert.equal(await homePage.homePageTitle.getText(),'Featured','Error:the page did not initialize well');
    });

    it('[CP-Register-01] Should pop an error msg when passwords not matching', async ()=>{
        addStep('Clicks on dropdown "My Account"');
        await homePage.myAccount.click();
        addStep('Clicks register');
        await homePage.registerBtn.click();
        addStep('Scrolls until first name field')
        await registerPage.firstName.scrollIntoView();
        addStep('Fills the form and press continue');
        await registerPage.registerForm(registerData.firstName,registerData.lastName,registerData.email,registerData.telephone,registerData.password,registerData.passwordConfirm);
        addStep('Checks that the error pops out');
        assert.equal(await registerPage.errorMsg.getText(),'Password confirmation does not match password!','Error:the page did not pop the correct msg');
        addStep('Goes back to home page');
        await registerPage.homeBtn.click();
        addStep('Checks that is in the home page')
        assert.equal(await homePage.homePageTitle.getText(),'Featured','Error:the test did not go back to home');

    });
     
  });