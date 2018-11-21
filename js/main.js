var navButton = document.querySelector('.adopt');

navButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document.querySelector('body')
  .classList
  .toggle('adopt-open')
});

var closeButton = 
    document.querySelector('.close-icon');
closeButton.addEventListener('click', function() {
  console.log('closte it!');
    document
  .querySelector('body')
  .classList
  .toggle('adopt-open')
    
});

var navButton = document.querySelector('.adoptmain');

navButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document.querySelector('body')
  .classList
  .toggle('adopt-open')
});