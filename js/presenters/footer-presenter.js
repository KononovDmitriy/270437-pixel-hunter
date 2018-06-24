import FooterView from './../views/footer-view.js';

const footerView = new FooterView();

export default () => {
  return footerView.element();
};
