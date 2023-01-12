import BasePage from '../pages/base.page';

class loginPage extends BasePage {

      //WebElements
    get emailForm(){ return $('#input-email'); };
    get passwordForm() { return $('#input-password'); };
    get signInBtn(){ return $('input[type="submit"]'); };
    get pageHeadingLogin() {return $('//h2[text()="Returning Customer"]')};
    get pageHeading() { return $('//h2[contains(text(),"Account")]');}; 

/**
   * Fills the login form
   * @param {String} email user email 
   * @param {String} password user password
   */

async loginForm(email,password) {
    
    await this.emailForm.setValue(email);
    await this.passwordForm.setValue(password);
    await this.signInBtn.click()
}

}
export default new loginPage();
