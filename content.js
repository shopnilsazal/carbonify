let urlArray = window.location.href.split('/');
let gistId = urlArray[urlArray.length - 1];
let file = document.querySelector('.file .file-header .file-actions');
let link = document.createElement('a');
link.innerText = 'Carbonify';
link.setAttribute('target', '_blank');
link.setAttribute('class', 'btn btn-sm');
link.setAttribute('href', 'https://carbon.now.sh/'+gistId);
file.appendChild(link);
