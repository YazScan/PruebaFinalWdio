import BasePage from '../pages/base.page';

class HomePage extends BasePage {

   //WebElements

   //Used in Login 
   get myAccount(){ return $('.fa-user'); };
   get login(){return $('//a[text()="Login"]')};


   //Used in ChangeCurrency 
   get pageHeading(){ return $('h1'); };
   get currency(){ return $('#form-currency')};
   get currencyDropDown(){return $('//button[contains(text(),"$ US Dollar")]')};
   get currencyElement() {return $('strong');};

   get searchBar(){ return $('[name="search"]') };

   //-------------------------------------------------------------------------------------------------------//
   /**
    
    * Clickea sobre la categoría correspondiente en la navbar
    * @param {String} category a la que ingresara
    */
      async clickOnCategory(category) {
         addStep(`Clicks in ${category}`);
         const categoryName = $(`//a[text()="${category}"]`);
         categoryName.Click();
      }

   /**
    * Clickea sobre show all de una categoria
    * @param {String} category 
    */
      async showAll(category) {
      addStep(`Clicks in show all ${category}`);
         const showAll = await $(`//a[text()=" Show All ${category}"]`);
         showAll.click();
      }

   /**
    * Escribe el artículo en el campo de búsqueda y presiona Enter
    * @param {String} article que se buscará
    */
   async search(article) {
        addStep(`Search article: ${article}`);
       await super.emptyFieldAndSendText(await this.searchBar, article);
       await this.barraDeBusqueda.keys('Enter');
   }

   /**
    * Obtener texto de la barra de búsqueda
    */
   async getSearchText() {
      addStep('Get text from the search bar');
       return await this.searchBar.getValue();
   }


}
export default new HomePage();