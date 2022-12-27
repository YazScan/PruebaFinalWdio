import BasePage from '../pages/base.page';

class loginPage extends BasePage {

      //WebElements
    get emailForm(){ return $('#input-email'); };
    get passwordForm() { return $('#input-password'); };
    get signInBtn(){ return $('input[type="submit"]'); };

    get pageHeading() { return $('//h2[contains(text(),"Account")]');}; 

/**
   * Completa el formulario de login.
   * @param {String} email email del usuario
   * @param {String} password password del usuario
   */

async loginForm(email,password) {
    await this.emailForm.setValue(email);
    await this.passwordForm.setValue(password);
    await this.signInBtn.click()
}

}
export default new loginPage();
