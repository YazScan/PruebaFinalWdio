import BasePage from '../pages/base.page';

class HomePage extends BasePage {

   //WebElements
   get barraDeBusqueda(){ return $('[name="search"]') };

   get currency(){ return $('.btn-group').$('.btn-link')};

   get currencyDropDown(){return $('.open').$('ul.dropdown-menu').$('li:nth-child(3)')};

   get laptopsAndNotebooks (){return $('*=Laptops')};

   get showAllLaptopsAndNotebooks (){return $('*=Show All Laptops')};

   get myAccount(){ return $('.fa-user'); }

   get login(){return $('.dropdown-menu-right').$('li:nth-child(2)')};

   //-------------------------------------------------------------------------------------------------------//

   /**
    * Escribe el artículo en el campo de búsqueda y presiona Enter
    * @param {String} articulo que se buscará
    */
   async buscar(articulo) {
        addStep(`Buscar artículo: ${articulo}`);
       await super.vaciarCampoYEnviarTexto(await this.barraDeBusqueda, articulo);
       await this.barraDeBusqueda.keys('Enter');
   }

   /**
    * Obtener texto de la barra de búsqueda
    */
   async obtenerTextoBusqueda() {
      addStep('Obtener texto de la barra de búsqueda');
       return await this.barraDeBusqueda.getValue();
   }


}
export default new HomePage();
