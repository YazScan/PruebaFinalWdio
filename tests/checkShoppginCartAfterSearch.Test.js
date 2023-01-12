// import homePage from '../pages/home.page';
// import DATOS from '../data/articles';
// import {assert} from 'chai';
// import searchPage from '../pages/search.page';

// describe('Search articles and check that the shopping cart did not change',  () => {
//     before('Open main page', async () => {
//         await homePage.open('/');
//         assert.equal(await homePage.homePageTitle.getText(),'Featured','Error:the page did not initialize well');
//     });

//     DATOS.forEach(({article}) => {
     
//         it(`Should search ${article}`, async ()=> {
            
//             addStep('Search articles')
//             await homePage.search(article);
//             await expect(await homePage.getSearchText()).to.equal(article);
//             await expect(await searchPage.resultName()).to.equal(article);
//             addStep('Checks that the shopping cart did not change')
//             await $(".btn-inverse").waitForDisplayed();
//             addStep('compare images')
//             expect(
//                 await browser.checkElement(await $(".btn-inverse"), "opencart-ShoppingCart", {
//                 }),
//                 "Error: Shopping Cart has changed"
//             ).equal(0);
//         });
//     });
// });
