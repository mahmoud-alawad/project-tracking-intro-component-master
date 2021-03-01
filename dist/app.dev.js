"use strict";

//show up the navbar on small screen
var collap = document.querySelector('.fa-bars ').addEventListener('click', function () {
  var menuBar = document.querySelector('.menu__links');
  menuBar.classList.toggle('open__menu');
});