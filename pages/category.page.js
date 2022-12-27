import BasePage from '../pages/base.page';

class categoryPage extends BasePage {

 /**
    * Obtiene el nombre de la pagina correspondiente a la categoria
    * @param {String} category
    */
 async getPageHeading(category) {
      addStep(`Get heading for: ${category}`);
     const categoryPageHeading = await $(`//h2[contains(text(),"${category}")]`);
     return categoryPageHeading.getText();
 }

}
export default new categoryPage();