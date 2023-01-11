// import homePage from '../pages/home.page';
// import loginPage from '../pages/login.page';
// import { DATA } from '../data/loginData.json';
// import {assert} from 'chai';


// const userOne = DATA.userOne;

// describe('Login test',  () => {
//     before('Open main page', async () => {
//         await homePage.open('/');
//         assert.equal(await homePage.homePageTitle.getText(),'Featured','Error:the page did not initialize well');
//     });
//     it('[CP-Login-01] Should login with the credentials in loginData.json', async ()=>{
//         addStep('Clicks on dropdown "My Account"');
//         await homePage.myAccount.click();
//         addStep('Clicks login');
//         await homePage.loginBtn.click();
//         addStep('Scrolls until email form')
//         await loginPage.emailForm.scrollIntoView();
//         addStep('Fills the form and press login');
//         await loginPage.loginForm(userOne.email,userOne.password);
//         addStep('Checks that it has entered the page')
//         assert.equal(await loginPage.pageHeading.getText(),'My Account','Error: Could not enter the page');
//         addStep('Return the page to its initial state')
//         await homePage.myAccount.click();
//         await homePage.logoutBtn.click();
//         addStep('Check that it has been effectively logged out')
//         assert.equal(await homePage.logguedOutMsg.getText(),'You have been logged off your account. It is now safe to leave the computer.','Error: the session was not closed');
//     });
//   });