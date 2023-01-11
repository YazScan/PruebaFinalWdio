// import homePage from '../pages/home.page';
// import {assert} from 'chai';

// let currency= '£';

// describe('Change currency',  () => {
//   before('Open main page', async () => {
//     await homePage.open('/');
//     assert.equal(await homePage.homePageTitle.getText(),'Featured','Error:the page did not initialize well');
// });
//   it('[CP-Currency-01] Should change currency to the one selected', async ()=>{
//     addStep('Selects currency dropdown');
//     await homePage.currency.click();
//     addStep('Selects the currency choosen');
//     await homePage.currencySelector(currency);
//     addStep('Checks that the currency has changed');
//     assert.equal(await homePage.currencyElement.getText(),currency,'Error: The currency is not what it should');
//     addStep('Selects currency dropdown');
//     await homePage.currency.click();
//     addStep('leaves the web page in its initial currency');
//     currency = '$';
//     await homePage.currencySelector(currency) ;
//     addStep('Checks the final currency');
//     assert.equal(await homePage.currencyElement.getText(),currency,'Error: The test did not end on the correct currency');
// });
// });

