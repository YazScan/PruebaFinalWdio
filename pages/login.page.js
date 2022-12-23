import BasePage from '../pages/base.page';

class HomePage extends BasePage {

      //WebElements

    get emailForm(){ return $('#input-email'); };
    get passwordForm() { return $('#input-password'); };
    get signInBtn(){ return $('#submit'); };
    get pageHeading() { return $('#content').$(':nth-child(1)')}; 


/**
   * Completa el formulario de login.
   * @param {String} email email del usuario
   * @param {String} password password del usuario
   */

async loginForm(email,password) {
    await this.emailForm.setValue(email);
    await this.passwordForm.setValue(password);
    await super.clickElement(await this.signInBtn);
}




}
export default new HomePage();
