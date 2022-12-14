import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';
import DATOS from '../datos/articulos';
 
describe('Cambiar la moneda', function () {

  it('Deberia cambiar la moneda a Euro', async ()=>{
    await homePage.abrir('/');
    await homePage.currency.click();
    await homePage.currencyDropDown.click();
    //let information= await $('=site')
    //await information.scrollIntoView();
  });
   
});
