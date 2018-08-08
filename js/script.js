var control_1 = document.querySelector('.control-1');
var control_2 = document.querySelector('.control-2');
var control_3 = document.querySelector('.control-3');
var body = document.querySelector('body');
var feedback = document.querySelector('.map-contacts__button');
var close = document.querySelector('.modal__close');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal__overlay');



control_1.addEventListener('click', function (evt) {
  body.classList.add('background-1');
  body.classList.remove('background-2');
  body.classList.remove('background-3');
});

control_2.addEventListener('click', function (evt) {
  body.classList.add('background-2');
  body.classList.remove('background-1');
  body.classList.remove('background-3');
});

control_3.addEventListener('click', function (evt) {
  body.classList.add('background-3');
  body.classList.remove('background-2');
  body.classList.remove('background-1');
});

feedback.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.add('modal-open');
  modal.classList.remove('modal-close');
  overlay.classList.add('modal__overlay--open');
  overlay.classList.remove('modal__overlay--close');
});

close.addEventListener('click', function(evt) {
  evt.preventDefault();
  modal.classList.add('modal-close');
  modal.classList.remove('modal-open');
  overlay.classList.add('modal__overlay--close');
  overlay.classList.remove('modal__overlay--open');
});