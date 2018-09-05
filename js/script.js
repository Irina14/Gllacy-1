var control_1 = document.querySelector('.control-1');
var control_2 = document.querySelector('.control-2');
var control_3 = document.querySelector('.control-3');
var body = document.querySelector('body');
var feedback = document.querySelector('.map-contacts__button');
var close = document.querySelector('.modal__close');
var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal__overlay');
var form = modal.querySelector('.modal__feedback');
var name = modal.querySelector('[name=name]');
var email = modal.querySelector('[name=email-feedback]');

var isStorageSupport = true;
var storageName = '';
var storageEmail = '';

  try {
    storageName = localStorage.getItem('name');
    storageEmail = localStorage.getItem('email');
  } catch (err) {
    isStorageSupport = false;
  }

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



feedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.add('modal-open');
  overlay.classList.add('modal__overlay--open');

   if (storageName || storageEmail) {
    name.value = storageName;
    email.value = storageEmail;
  }
  });

if (isStorageSupport) {
    localStorage.setItem('name', name.value);
    localStorage.setItem('email', email.value);
}

close.addEventListener('click', function (evt) {
  evt.preventDefault();
  modal.classList.remove('modal-open');
  overlay.classList.remove('modal__overlay--open');
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modal.classList.contains('modal-open')) {
     modal.classList.remove('modal-open');
     overlay.classList.remove('modal__overlay--open');
    }
  }
});



