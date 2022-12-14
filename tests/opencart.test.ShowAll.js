import homePage from '../pages/home.page';
import busquedaPage from '../pages/busqueda.page';
import DATOS from '../datos/articulos';

describe('Show all laptops & notbooks', function () {

  it('Deberia abrir la pantalla laptops & notebooks', async ()=>{
    await homePage.abrir('/');
    await homePage.laptopsAndNotebooks.click();
    await homePage.showAllLaptopsAndNotebooks.click();
    await assert.equal(await $('h2').getValue(),'Laptops & Notebooks','Error: No se accedio a la pantalla de Laptops & notebooks');
    await browser.pause(5000);

  });
   
});