var header = document.getElementById('owo');

/**
 * Update the value of the header to a random value, checking for duplicates.
 */
function updateHeaderText () {
  var owos = ['oWo', 'OWO', 'OwO', 'owo'];
  if (owos.indexOf(header.innerText) > -1) owos.splice(owos.indexOf(header.innerText), 1);
  header.innerText = owos[Math.floor(Math.random() * owos.length)];
}
updateHeaderText();
header.onclick = updateHeaderText;

// Email auto-select on homepage
var email = document.getElementById('email');
if (email) {
  /**
   * Select the email address in the box on click or focus.
   */
  email.onclick = email.onfocus = function selectEmail () {
    if (this.__active) return;
    this.__active = true;
    var self = this;
    setTimeout(function () {
      if (self.setSelectionRange) self.setSelectionRange(0, self.value.length);
      else self.select();
    }, 0);
  };
  email.onblur = function deselectEmail () {
    this.__active = false;
  };
}
