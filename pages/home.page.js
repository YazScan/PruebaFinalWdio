import BasePage from '../pages/base.page';

class HomePage extends BasePage {

   //WebElements

   //Used in Login 
   get myAccount(){ return $('.fa-user'); };
   get login(){return $('.dropdown-menu-right').$('li:nth-child(2)')};

   //Used in ChangeCurrency 
   get pageHeading(){ return $('h1'); };
   get currency(){ return $('.btn-group').$('.btn-link')};
   get currencyDropDown(){return $('.open').$('ul.dropdown-menu').$('li:nth-child(3)')};
   get currencyElement() {return $('strong');};

   //Used in ShowAll
   get laptopsAndNotebooks (){return $('*=Laptops')};
   get showAllLaptopsAndNotebooks (){return $('*=Show All Laptops')};

   get searchBar(){ return $('[name="search"]') };

   //-------------------------------------------------------------------------------------------------------//

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