import BasePage from '../pages/base.page';

class HomePage extends BasePage {

   //WebElements
   get searchBar(){ return $('[name="search"]') };
   get currency(){ return $('.btn-group').$('.btn-link')};
   get currencyDropDown(){return $('.open').$('ul.dropdown-menu').$('li:nth-child(3)')};
   get laptopsAndNotebooks (){return $('*=Laptops')};
   get showAllLaptopsAndNotebooks (){return $('*=Show All Laptops')};
   get myAccount(){ return $('.fa-user'); };
   get login(){return $('.dropdown-menu-right').$('li:nth-child(2)')};
   get pageHeading(){ return $('h1'); };
   get currencyElement() {return $('strong');};

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