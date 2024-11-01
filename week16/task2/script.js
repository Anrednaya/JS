const submitButton = document.querySelector('#submitButton');
submitButton.disabled = true;
const form = document.forms.form;

form.addEventListener('submit', function (evt) {
  evt.preventDefault();
  console.log(`
    имя: ${namee.value};
    email: ${email.value};
    возраст: ${age.value};
    пол: ${gender.value};
    профессия: ${profession.value};
    пароль: ${password.value};
    согласие на обработку персональных данных: получено;
    `)
})


// проверка валидности всех полей для разблокировки кнопки
function fieldsChecking() {
  if (nameCheck() && emailCheck() && ageCheck() && genderChecking() && professionCheck() && agreementCheck() && passwordCheck()) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}


//проверка корректности введенного имени для отображения ошибки
const namee = form.elements.nameInput;
const nameChecking = () => {
  const regex = /^[a-zA-Z]{2,20}$/;
  const error = form.querySelector('#nameError');
  if (regex.test(namee.value)) {
    error.style.display = 'none';
    error.textContent = ''
    namee.style.border = '';
  } else {
    namee.style.border = 'solid 1px red';
    error.style.display = 'block';
    error.textContent = 'введенное имя некорректно'
    namee.addEventListener('input', nameChecking);
  }
}
//проверка корректности введенного имени для проверки всех полей (чтобы при проверке всех полей не выполнялись другие функции и не выводились все сообщения об ошибках, не уверена в корректности такого способа, применен и к остальным полям)
const nameCheck = () => {
  const regex = /^[a-zA-Z ]{2,20}$/;
  if (regex.test(namee.value)) {
    return true;
  } else {
    return false;
  }
}

namee.addEventListener('blur', nameChecking);
namee.addEventListener('blur', nameCheck);
namee.addEventListener('input', nameCheck);
namee.addEventListener('blur', fieldsChecking);
namee.addEventListener('input', fieldsChecking);


//проверка корректности введенного email
const email = form.elements.emailInput;
const emailChecking = () => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  const error = form.querySelector('#emailError');
  if (regex.test(email.value)) {
    error.style.display = 'none';
    error.textContent = ''
    email.style.border = '';
  } else {
    email.style.border = 'solid 1px red';
    error.style.display = 'block';
    error.textContent = 'введите корректный email'
    email.addEventListener('input', emailChecking);
  }
}

const emailCheck = () => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
  if (regex.test(email.value)) {
    return true;
  } else {
    return false;
  }
}
email.addEventListener('blur', emailChecking);
email.addEventListener('blur', emailCheck);
email.addEventListener('input', emailCheck);
email.addEventListener('blur', fieldsChecking);
email.addEventListener('input', fieldsChecking);


//проверка корректности введенного возраста
const age = form.elements.ageInput;
const ageChecking = () => {
  const regex = /^[0-9]{1,3}$/;
  const error = form.querySelector('#ageError');
  if (regex.test(age.value)) {
    age.style.border = '';
    error.style.display = 'none';
    error.textContent = '';
  } else {
    age.style.border = 'solid 1px red';
    error.style.display = 'block';
    error.textContent = 'введите возраст (целое положительное число)';
    age.addEventListener('input', ageChecking);
  }
}
const ageCheck = () => {
  const regex = /^[0-9]{1,3}$/;
  if (regex.test(age.value)) {
    return true;
  } else {
    return false;
  }
}
age.addEventListener('blur', ageChecking);
age.addEventListener('blur', ageCheck);
age.addEventListener('input', ageCheck);
age.addEventListener('blur', fieldsChecking);
age.addEventListener('input', fieldsChecking);


//проверка отметки гендера
const male = form.querySelector('#male');
const female = form.querySelector('#female');
let gender;
const genderChecking = () => {
  if (male.checked) {
    gender = male;
    return true;
  } else if (female.checked) {
    gender = female;
    return true;
  } else {
    return false;
  }
}

male.addEventListener('change', fieldsChecking);
male.addEventListener('change', genderChecking);
female.addEventListener('change', fieldsChecking);
female.addEventListener('change', genderChecking);

//проверка выбора профессии
const select = form.elements.professionSelect;
let profession;
const professionChecking = () => {
  const selectedIndex = select.selectedIndex;
  const error = form.querySelector('#professionError');
  if (selectedIndex == 0) {
    error.style.display = 'block';
    error.textContent = 'выберите профессию';
    select.style.border = 'solid 1px red';
  } else {
    error.textContent = '';
    error.style.display = 'none';
    select.style.border = '';
    profession = select;
  }
}
const professionCheck = () => {
  const selectedIndex = select.selectedIndex;
  if (selectedIndex === 0) {
    return false;
  } else {
    return true;
  }
}
select.addEventListener('blur', professionChecking);
select.addEventListener('change', professionChecking);
select.addEventListener('blur', fieldsChecking);
select.addEventListener('change', fieldsChecking);
select.addEventListener('blur', professionCheck);
select.addEventListener('change', professionCheck);


//проверка пароля
const password = form.elements.passwordInput;
const passwordChecking = () => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[0-9])[A-Za-z]{8,20}$/;
  const error = form.querySelector('#passwordError');
  if (regex.test(password.value)) {
    error.style.display = 'block';
    error.textContent = 'введите корректный пароль';
    password.style.border = 'solid 1px red';
  } else {
    error.textContent = '';
    error.style.display = 'none';
    password.style.border = '';
  }
}
const passwordCheck = () => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[0-9])[A-Za-z0-9]{8,20}$/;
  if (regex.test(password.value)) {
    return true;
  } else {
    return false;
  }
}
password.addEventListener('blur', passwordChecking);
password.addEventListener('blur', passwordCheck);
password.addEventListener('input', passwordCheck);
password.addEventListener('blur', fieldsChecking);
password.addEventListener('input', fieldsChecking);


//проверка согласия на обработку данных
const flag = form.elements.agreementCheckbox;
const agreementChecking = () => {
  const error = form.querySelector('#agreementError');
  if (flag.checked) {
    error.textContent = '';
    error.style.display = 'none';
    return true;
  } else {
    error.style.display = 'block';
    error.textContent = 'необходимо подтвердить согласие';
  }
}
const agreementCheck = () => {
  if (flag.checked) {
    return true;
  } else {
    return false;
  }
}
flag.addEventListener('change', agreementChecking)
flag.addEventListener('change', agreementCheck)
flag.addEventListener('change', fieldsChecking)