function choice() {
  return Math.random() > 0.5;
}

var last = '';
var header = document.getElementById('owo');
header.href = '#';
header.onclick = function() {
  var letter = choice() ? 'O' : 'U';
  var current = [
    choice() ? letter : letter.toLowerCase(),
    choice() ? 'W' : 'w',
    choice() ? letter : letter.toLowerCase(),
  ].join('');
  if (current === last) return header.onclick();
  header.innerText = last = current;
};
