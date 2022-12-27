import categoryPage from '../pages/category.page';
import homePage from '../pages/home.page';

let category= "Laptops & Notebooks"

describe('Show all products in a category', () => {

  it('[CP-Categories-01] Should open the page of the category', async ()=>{
    addStep('Open the web');
    await homePage.open('/');
    addStep('Checks that the page has been opened correctly');
    assert.equal(await homePage.pageHeading.getText(),'Your Store','Error:the page did not initialize well');
    addStep('Clicks on category')
    await homePage.clickOnCategory(category);
    addStep('Clicks on show all')
    await homePage.showAll(category);
    addStep('Checks that the category page has been opened correctly');
    assert.equal(await categoryPage.categoryPageHeading.getText(),category,'Error: Could not enter the section Laptops & Notebooks');
    addStep('Goes back to the main page')
    await categoryPage.mainPageBtn.click();
    addStep('Checks that it is back to the main page');
    assert.equal(await homePage.pageHeading.getText(),'Your Store','Error: the test did not go back to the main page');

  
   
    await browser.pause(5000);

  });
   
});