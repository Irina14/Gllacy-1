var control_1 = document.querySelector('.control-1');
var control_2 = document.querySelector('.control-2');
var control_3 = document.querySelector('.control-3');
var body = document.querySelector('body');



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