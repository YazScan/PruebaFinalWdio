import BasePage from '../pages/base.page';

class HomePage extends BasePage {

      //WebElements

      get categoryPageHeading(){ return $('h2') };

}
export default new HomePage();
