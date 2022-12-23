import homePage from '../pages/home.page';

const pageHeading = $('h1');
 
describe('Change currency',  () => {

  it('[CP-Currency-01] Should change currency to US Dollar', async ()=>{
    addStep('Open the web');
    await homePage.open('/');
    //addStep('Checks that the page has been opened correctly');
    //await assert.equal(await pageHeading.getText(),'Your Store','Error:the page did not initialize well');
    addStep('Selects currency dropdown');
    await homePage.currency.click();
    await homePage.currencyDropDown.click();
    addStep('Changes currency to $ US Dollar');
    await assert.equal(await $('strong').getText(),'$','Error: The currency is not what it should');
  });
});

