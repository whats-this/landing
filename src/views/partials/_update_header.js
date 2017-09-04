var header = document.getElementById('owo');

function choice() {
  return Math.random() > 0.5;
}

header.href = '#';
header.onclick = function() {
  var letter = choice() ? 'O' : 'U';
  header.innerText = [
    choice() ? letter : letter.toLowerCase(),
    choice() ? 'W' : 'w',
    choice() ? letter : letter.toLowerCase(),
  ].join('');
}
