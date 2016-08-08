"use strict";

var btn = document.querySelector('.search__button');
var close = document.getElementById('close');
var wrapper = document.querySelector('.wrap');
var result = document.querySelector('.result');

btn.addEventListener('click', function() {
  wrapper.className += ' open';
  result.className += ' open';
  close.style.display = 'initial';
});

close.addEventListener('click', function() {
  wrapper.className = 'wrap';
  result.className = 'result';
  close.style.display = 'none';
});
