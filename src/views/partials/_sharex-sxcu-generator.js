var tokenInput = document.getElementById('token');
var submitBtn = document.getElementById('generate');

var uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

var templateToken = '{{KEY}}';
var template =
'{\n' +
'  "Name": "whats-th.is",\n' +
'  "DestinationType": "ImageUploader, TextUploader, FileUploader",\n' +
'  "RequestType": "POST",\n' +
'  "RequestURL": "https://api.awau.moe/upload/pomf?key={{KEY}}",\n' +
'  "FileFormName": "files[]",\n' +
'  "ResponseType": "Text",\n' +
'  "URL": "https://owo.whats-th.is/$json:files[0].url$"\n' +
'}';

// Blob download code taken from https://stackoverflow.com/a/19328891.
submitBtn.onclick = function (e) {
  e.preventDefault();
  if (!uuidRegex.test(tokenInput.value)) {
    return alert('Invalid token.');
  }

  var a = document.createElement('a');
  document.body.appendChild(a);
  a.style = 'display:none';

  var sxcu = template.replace(templateToken, tokenInput.value);
  var blob = new Blob([sxcu], {type: 'application/octet-stream'});
  var url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = 'owo.sxcu';
  a.click();
  window.URL.revokeObjectURL(url);
};
