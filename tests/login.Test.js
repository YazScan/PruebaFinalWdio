import homePage from '../pages/home.page';
import loginPage from '../pages/login.page';
import { DATA } from '../data/loginData.json';

const userOne = DATA.userOne;

describe('Login Credenciales Validas',  () => {

    it('[CP-Login-01] Should login with the credentials in loginData.json', async ()=>{

        addStep('Open the web');
        await homePage.open('/');
        addStep('Checks that the page has been opened correctly');
        assert.equal(await homePage.pageHeading.getText(),'Your Store','Error:the page did not initialize well');
        addStep('Clicks on dropdown "My Account"');
        await homePage.myAccount.click();
        addStep('Clicks login');
        await homePage.login.click();
        addStep('Scrolls until email form')
        await loginPage.emailForm.scrollIntoView();
        addStep('Fills the form and press login');
        await loginPage.loginForm(userOne.email,userOne.password);
        addStep('Checks that it has entered the page')
        assert.equal(await loginPage.pageHeading.getText(),'My Account','Error: Could not enter the page');
    });
     
  });