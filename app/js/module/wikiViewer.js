"use strict";

var WikiViewer = function(options) {
  this.wrapper = options.wrapEl;
  this.modal = options.modalEl;
  this.btn = options.btn;
  this.close = options.closeEl;
  this.input = options.inputEl;
}

WikiViewer.prototype.render = function (data) {
  var title = document.createElement('h1');
  title.className = 'result__header';
  title.innerHTML = this.input.value;
  this.modal.appendChild(title);
  for (var i = 0; i < data.query.pages.length; i++) {
    var a = document.createElement('a');
    a.href = 'https://en.wikipedia.org/?curid=' + data.query.pages[i].pageid;
    a.className = 'result__link';
    a.target = '_blank';
    a.innerHTML = '<div class="result__card"><h2 class="result__title">' + data.query.pages[i].title + '</h2><p class="result__subtitle">' + data.query.pages[i].extract + '</p></div>';
    this.modal.appendChild(a);
  }
};

WikiViewer.prototype.changeView = function (e) {
  var target = e.target === this.close ? e.target : this.btn;
  var attr = target.getAttribute('data-action');
  this.wrapper.classList.toggle('open');
  this.modal.classList.toggle('open');
  if (attr == 'search') {
    this.close.style.display = 'initial';
  } else {
    this.close.style.display = 'none';
    this.input.value = '';
    function timeout() {
      this.modal.innerHTML = '';
    }
    setTimeout(timeout.bind(this), 1000);
  }
};

module.exports = WikiViewer;
