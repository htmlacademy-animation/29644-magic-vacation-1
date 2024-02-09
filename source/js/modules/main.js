export default () => {
  let pageBody = document.getElementsByTagName('body')[0];
  window.addEventListener('load', function () {
    pageBody.classList.add('is-loaded');
  });
};
