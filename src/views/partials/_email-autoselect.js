var email = document.getElementById('email');

email.onclick = email.onfocus = function () {
  if (this.__active) return;
  this.__active = true;
  var self = this;

  setTimeout(function () {
    if (self.setSelectionRange) self.setSelectionRange(0, self.value.length);
    else self.select();
  }, 0);
};

email.onblur = function () {
  this.__active = false;
};
