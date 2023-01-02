import homePage from '../pages/home.page';
import DATOS from '../data/articles';
import {assert} from 'chai';
import searchPage from '../pages/search.page';

describe('Search article',  () => {
    before('Open main page', async () => {
        await homePage.open('/');
        assert.equal(await homePage.pageHeading.getText(),'Your Store','Error:the page did not initialize well');
    });

    DATOS.forEach(({article}) => {
     
    it(`Debería buscar ${article}`, async ()=> {
     
        await homePage.search(article);
        await expect(await homePage.getSearchText()).to.equal(article);
        await expect(await searchPage.resultName()).to.equal(article);
        });
    });  
    it('Visual regression testing on the shopping cart element', async () => {
        await $(".btn-inverse").waitForDisplayed();
        expect(
            await browser.checkElement(await $(".btn-inverse"), "opencart-ShoppingCart", {
            }),
            "Error: Shopping Cart has changed"
        ).equal(0);
    });
});
    
     
