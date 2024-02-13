export default () => {
  let pageBody = document.getElementsByTagName('body')[0];
  let socialToggler = document.querySelector('.social-block__toggler');

  window.addEventListener('load', function () {
    pageBody.classList.add('is-loaded');
    socialToggler.classList.add('animate');
  });
};
