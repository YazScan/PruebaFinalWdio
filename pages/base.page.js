const PAGE_TIMEOUT = 10000

export default class BasePage {


   /**
    * Abrir página
    * @param {String} route a la cual acceder
    */
   async open(route) {
    addStep('Open url');
       await browser.url(`${route}`);
   }


   /**
    * Esperar a que un elemento sea clickeable y hacer click
    * @param {Object} element a clickear
    */
   async clcikElement(element) {
       await element.waitForClickable({ timeout: PAGE_TIMEOUT });
       await element.click();
   }


   /**
    * Método para enviar texto a un elemento
    * @param {Object} element que recibirá el texto
    * @param {String} text a envíar 
    */
   async emptyFieldAndSendText(element, text){
       await element.waitForClickable({ timeout: PAGE_TIMEOUT });
       await element.clearValue();
       await element.click();
       await element.keys(text);
   }


}