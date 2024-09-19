function addTask() {
  const task = document.getElementById('task');
  const newItem = document.createElement('li');
  if (task.value == '') return 
  else {
    newItem.textContent = task.value;
    const tasklist = document.getElementById('tasklist');
    tasklist.append(newItem);
    const del = document.createElement('span');
    del.textContent = 'удалить';
    newItem.append(del);
    del.addEventListener ('click', function () {
      this.closest('li').remove();
    });
    newItem.addEventListener ('click', function () {
      this.classList.toggle('done');
    });
    task.value = '';
  }
};

document.getElementById('addButton').onclick = addTask;