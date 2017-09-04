var header = document.getElementById('owo');

// Sets the header to a random value.
function updateHeaderText () {
	var owos = ['oWo', 'OWO', 'OwO', 'owo', 'uwu'];
	if (owos.indexOf(header.innerText) > -1) owos.splice(owos.indexOf(header.innerText), 1);
	header.innerText = owos[Math.floor(Math.random() * owos.length)];
}

if (document.location.pathname === '/') {
  header.href = '#';
  updateHeaderText();
  header.onclick = updateHeaderText;
}
