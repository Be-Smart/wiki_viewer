"use strict";

var WikiViewer = require('./wikiViewer');

var btn = document.querySelector('.search__button');
var close = document.getElementById('close');
var wrapper = document.querySelector('.wrap');
var modal = document.querySelector('.result');
var input = document.querySelector('.search__input');

var wikiViewer = new WikiViewer({
  wrapEl: wrapper,
  modalEl: modal,
  btn: btn,
  closeEl: close,
  inputEl: input,
});

input.addEventListener('keyup', function() {
  if (event.keyCode == 13) {
    btn.click();
  }
});

btn.addEventListener('click', function(e) {
  JSONP('https://en.wikipedia.org/w/api.php?format=json&action=query&formatversion=2&generator=search&prop=extracts&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=' + input.value, wikiViewer.render.bind(wikiViewer));
  wikiViewer.changeView(e);
});

close.addEventListener('click', function(e) {
  wikiViewer.changeView(e);
});
