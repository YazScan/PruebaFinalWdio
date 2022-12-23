import homePage from '../pages/home.page';
import loginPage from '../pages/login.page';
import { DATA } from '../data/loginData.json';

const usuarioUno = DATA.usuarioUno;
const accountTxt = 'My account';

describe('Login Credenciales Validas',  () => {

    it('Deberia loguearse cuando coloca credenciales validas', async ()=>{
        await homePage.abrir('/');
        addStep('Clickea el dropdown My Account');
        await homePage.myAccount.click();
        addStep('Clickea login');
        await homePage.login.click();
        addStep('Scrollea hasta form email')
        await loginPage.emailForm.scrollIntoView();
        addStep('Ingresa las credenciales validas en el form y pulsa login');
        await loginPage.loginForm(usuarioUno.email,usuarioUno.password);
        addStep('Comprueba que se encuentra en la pantalla principal');
        expect(await loginPage.pageHeading.getText()).to.be.equal(accountTxt);
        await browser.pause(5000);
    });
     
  });