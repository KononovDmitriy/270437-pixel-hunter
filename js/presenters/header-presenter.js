import HeaderView from './../views/header-view.js';
import application from './../application.js';

const headerView = new HeaderView();

headerView.screenHeaderCallback = () => {
  application.showGreeting();
};


export default () => {
  return headerView.element();
};
