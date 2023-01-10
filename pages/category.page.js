import BasePage from '../pages/base.page';

class categoryPage extends BasePage {

      //WebElements

      get categoryPageHeading(){ return $('h2'); };
      get homeBtn() {return $('.fa-home')}

}
export default new categoryPage();