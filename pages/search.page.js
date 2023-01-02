import BasePage from './base.page';

class searchPage extends BasePage {

   //Web elements
   get result(){ return $('h4') }

   //-------------------------------------------------------------------------------------------------------//
 
   /**
    * Clicks on the result
    */
   async clickResult() {
       await super.clickearElemento(this.result);
   }

   /**
    * Get result text
    */
   async resultName() {
       return await this.result.getText();
   }

}

export default new searchPage();