import BasePage from '../pages/base.page';

class HomePage extends BasePage {

   //WebElements

   get myAccount(){ return $('.fa-user'); };

   get loginBtn(){return $('//a[text()="Login"]')};

   get logoutBtn() {return $('//a[text()="Logout"]')};

   get logguedOutMsg() {return $('//p[contains(text(),"You have been logged off your account")]')};

   get pageHeading(){ return $('h1')};

   get currency(){ return $('#form-currency')};

   get currencyElement() {return $('strong')};

   get searchBar(){ return $('[name="search"]') };

   get logoutBtn() {return $('//a[text()="Logout"]')};


   //-------------------------------------------------------------------------------------------------------//
   /**
    *
     * Clickea sobre la moneda elegida 
    * @param {String} currency
    */
      async currencySelector(currency) {
      addStep(`Selects ${currency}`);
      const currencyDropdown = $(`//button[contains(text(),"${currency}")]`);
      await currencyDropdown.click();
   };

    /**
    * Clickea sobre la categoría correspondiente en la navbar
    * @param {String} category a la que ingresara
    */
      async clickOnCategory(category) {
         addStep(`Clicks in ${category}`);
         const categoryName = $(`//a[text()="${category}"]`);
         await categoryName.click();
      }

   /**
    * Clickea sobre show all de una categoria
    * @param {String} category 
    */
      async showAll(category) {
      addStep(`Clicks in show all ${category}`);
         const showAll = await $(`//a[text()="Show All ${category}"]`);
         await showAll.click();
      }

   /**
    * Escribe el artículo en el campo de búsqueda y presiona Enter
    * @param {String} article que se buscará
    */
   async search(article) {
        addStep(`Search article: ${article}`);
       await super.emptyFieldAndSendText(await this.searchBar, article);
       await this.searchBar.keys('Enter');
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