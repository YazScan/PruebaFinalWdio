import BasePage from '../pages/base.page';

class categoryPage extends BasePage {

      //WebElements

      get categoryPageHeading(){ return $('h2') };

}
export default new categoryPage();