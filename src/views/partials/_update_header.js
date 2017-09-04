var header = document.getElementById('owo');

if (document.location.pathname === '/') {
  header.href = '#';
  header.onclick = function() {
    header.innerText = randomOwo();
  }
}

function randomOwo() {
  var letter = choice() ? 'O' : 'U';
  return [
    choice() ? letter : letter.toLowerCase(),
    choice() ? 'W' : 'w',
    choice() ? letter : letter.toLowerCase(),
  ].join('');
}

function choice() {
  return Math.random() > 0.5;
}
