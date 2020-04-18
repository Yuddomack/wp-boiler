const f = document.createDocumentFragment();
const div = document.createElement('div');
div.textContent = 'hi';
f.appendChild(div);
document.querySelector('body').appendChild(f);
