function transformUsername() {
  if (document.querySelector('#username').value != '') {
    username = document.querySelector('#username').value;
    console.log(username);
    const newUsername = username[0].toUpperCase() + username.slice(1).toLowerCase();
    return(newUsername);
  }
  else {
    return('Username');
  }
}

function checkSpam() {
  let text = document.querySelector('#text').value;
  text = text.replace(/xxx/gi, '***');
  text = text.replace(/viagra/gi, '***');
  return (text)
}

function selectRandomAvatar() {
  const number = Math.floor(Math.random()*5 + 1);
  const path = `./img/${number}.jpg`
  return(path);
}

function addComment(evt) {
  evt.preventDefault();
  const username = transformUsername();
  // console.log(username);
  const avatarLink = document.querySelector('#avatarLink').value;
  const text = checkSpam();
  const commentStructure = `
	<div class="comment-wrapper">
	<p id="commentUsername"></p>
	<img id="commentAvatar" src="" alt="">
	<div id="commentText"></div>
	</div>
	<p id="commentDate"></p>
  `
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
  };
  let date = new Date();
  const commentArea = document.querySelector('#commentArea');
  let comment = document.createElement('div');
  comment.id = 'createdComment';
  comment.innerHTML = commentStructure;
  commentArea.append(comment);
  if (document.getElementById('anonymus').checked || username.textContent === '') {
    comment.querySelector('#commentUsername').textContent = 'Username';
  } else {
    comment.querySelector('#commentUsername').textContent = username;
  }
  if (document.getElementById('anonymus').checked) {
    comment.querySelector('#commentUsername').textContent = 'Username';
  } else {
    comment.querySelector('#commentUsername').textContent = username;
  }
  comment.querySelector('#commentText').textContent = text;

  if (avatarLink != '') {
    comment.querySelector('#commentAvatar').src = avatarLink;
  } else {
    comment.querySelector('#commentAvatar').src = selectRandomAvatar();
  }
  comment.querySelector('#commentDate').textContent = date.toLocaleString("ru", options);
  document.querySelector('#avatarLink').value = '';
  document.querySelector('#username').value = '';
  document.querySelector('#text').value = '';
  document.getElementById('anonymus').checked = false;
};

const sendButton = document.querySelector('#send');
sendButton.addEventListener('click', addComment);
// sendButton.addEventListener('click', selectRandomAvatar);
