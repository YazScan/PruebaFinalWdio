import homePage from '../pages/home.page';

let currency= '£'
describe('Change currency',  () => {

  it('[CP-Currency-01] Should change currency to the one selected', async ()=>{
    addStep('Open the web');
    await homePage.open('/');
    addStep('Checks that the page has been opened correctly');
    assert.equal(await homePage.pageHeading.getText(),'Your Store','Error:the page did not initialize well');
    addStep('Selects currency dropdown');
    await homePage.currency.click();
    addStep('Selects the currency choosen');
    await homePage.currencySelector(currency);
    addStep('Checks that the currency has changed');
    assert.equal(await homePage.currencyElement.getText(),currency,'Error: The currency is not what it should');
    addStep('Selects currency dropdown');
    await homePage.currency.click();
    addStep('leaves the web page in its initial currency');
    let currency = '$'
    await homePage.currencySelector(currency) ;
    addStep('Checks the final currency');
    assert.equal(await homePage.currencyElement.getText(),currency,'Error: The test did not end on the correct currency');
});
});

