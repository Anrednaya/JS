
const button = document.getElementById('createWord');

const createWord = () => {
  document.getElementById('createdWord').textContent = '';
  let createdWord = document.createElement('p');
  createdWord.textContent = '';
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const result = alphabet[Math.floor(Math.random()*26)] + alphabet[Math.floor(Math.random()*26)] + alphabet[Math.floor(Math.random()*26)] + alphabet[Math.floor(Math.random()*26)];
  document.getElementById('createdWord').textContent = result;
}

button.onclick = createWord;
