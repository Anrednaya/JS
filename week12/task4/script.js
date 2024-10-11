
function transformUsername() {
  const username = document.querySelector('#username').value;
  const newUsername = username[0].toUpperCase() + username.slice(1).toLowerCase();
  return(newUsername);
}

function checkSpam() {
  let text = document.querySelector('#text').value;
  text = text.replace(/xxx/gi, '***');
  text = text.replace(/viagra/gi, '***');
  return(text)
}

function addComment(evt) {
  evt.preventDefault();
  const username = transformUsername();
  const avatarLink = document.querySelector('#avatarLink').value;
  console.log(avatarLink);
  const text = checkSpam();
  const commentStructure = `
    <p id="commentUsername"></p>
    <img id="commentAvatar" src="" alt="">
    <div id="commentText"></div>
    `
  const commentArea = document.querySelector('#commentArea');
  let comment = document.createElement('div');
  comment.id = 'createdComment';
  comment.innerHTML = commentStructure;
  commentArea.append(comment);
  comment.querySelector('#commentUsername').textContent = username;
  comment.querySelector('#commentText').textContent = text;
  comment.querySelector('#commentAvatar').src = avatarLink;
  document.querySelector('#avatarLink').value = '';
  document.querySelector('#username').value = '';
  document.querySelector('#text').value = '';
};

const sendButton = document.querySelector('#send');
sendButton.addEventListener('click', addComment);