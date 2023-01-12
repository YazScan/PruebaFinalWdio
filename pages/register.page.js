import BasePage from '../pages/base.page';

class registerPage extends BasePage {

    //WebElements
    get pageHeader() {return $('//h1[text()="Account"]')};
    get firstNameField(){ return $('#input-firstname'); };
    get lastName() { return $('#input-lastname'); };
    get email () { return $('#input-email'); };
    get telephone() { return $('#input-telephone'); };
    get password() {return $('#input-password'); };
    get passwordConfirm() {return $('#input-confirm'); };  

    get privacyPolicyBtn() {return $('input[type="checkbox"]')}
    get continueBtn(){ return $('input[type="submit"]'); };

    get errorMsg() {return $('.text-danger')}
    get homeBtn() {return $('.fa-home')}
/**
   * Fills the register form
   * @param {String} firstName user name 
   * @param {String} lastName user last-name
   * @param {String} email user email
   * @param {String} telephone user telephone
   * @param {String} password user password
   * @param {String} passwordConfirm user password confirm
   */

async registerForm(firstName,lastName,email,telephone,password,passwordConfirm) {
    await this.firstNameField.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.email.setValue(email);
    await this.telephone.setValue(telephone);
    await this.password.setValue(password);
    await this.passwordConfirm.setValue(passwordConfirm);
    await this.privacyPolicyBtn.click();
    await this.continueBtn.click();
}
     	

}
export default new registerPage();