import categoryPage from '../pages/category.page';
import homePage from '../pages/home.page';



describe('Show all products in a category', () => {

  it('[CP-Categories-01] Should open the page of the category', async ()=>{
    addStep('Open the web');
    await homePage.open('/');

    addStep('Checks that the page has been opened correctly');
    assert.equal(await homePage.pageHeading.getText(),'Your Store','Error:the page did not initialize well');


    addStep('Clicks on show all of that category')
    await homePage.ShowsAllProducts("Laptops & Notebooks");

    //addStep('Checks that the category page has been opened correctly');
    //assert.equal(await categoryPage.getPageHeading,'Laptops & Notebooks','Error: Could not enter the section Laptops & Notebooks');
  });
   
});