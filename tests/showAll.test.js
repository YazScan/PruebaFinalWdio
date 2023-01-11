// import homePage from '../pages/home.page';
// import categoryPage from '../pages/category.page';

// import {assert} from 'chai';


// const category= "Laptops & Notebooks"

// describe('Show all products in a category', () => {
//     before('Open main page', async () => {
//         await homePage.open('/');
//         assert.equal(await homePage.homePageTitle.getText(),'Featured','Error:the page did not initialize well');
//     });
//     it('[CP-Categories-01] Should open the page of the category', async ()=>{
//         addStep('Clicks on category')
//         await homePage.clickOnCategory(category);
//         addStep('Clicks on show all')
//         await homePage.showAll(category);
//         addStep('Checks that the category page has been opened correctly');
//         assert.equal(await categoryPage.categoryPageHeading.getText(),category,'Error: Could not enter the section Laptops & Notebooks');
//         addStep('Goes back to the main page')
//         await categoryPage.homeBtn.click();
//         addStep('Checks that it is back to the main page');
//         assert.equal(await homePage.homePageTitle.getText(),'Featured','Error:the page did not initialize well');
//     });
    
// });