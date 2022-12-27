import BasePage from '../pages/base.page';

class categoryPage extends BasePage {

      //WebElements

      get categoryPageHeading(){ return $('h2'); };
      get mainPageBtn (){ return $('//a[text()="Your Store"]')};	

}
export default new categoryPage();