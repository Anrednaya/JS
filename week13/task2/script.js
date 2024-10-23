const calculateDaysUntilBirthday = () => {
  const birthDate = new Date(document.getElementById('birthDate').value);
  if (document.getElementById('birthDate').value != '') {
    document.getElementById('result').style.color = 'inherit';
    const currentDate = new Date();
    let result;
    birthDate.setFullYear(currentDate.getFullYear());
    if (birthDate > currentDate) {
      result = Math.floor((birthDate - currentDate) / (1000 * 60 * 60 * 24));
    } else {
      birthDate.setFullYear(currentDate.getFullYear() + 1);
      result = Math.floor((birthDate - currentDate) / (1000 * 60 * 60 * 24));
    }
    if (result === 0) {
      document.getElementById('result').textContent = 'Ваш день Рождения сегодня! Наилучшие пожелания!';
    } else {
      let lastNum = result % 10;
      console.log(result);
      if ((lastNum >= 5 && lastNum <= 9) || (lastNum == 0)) {
        document.getElementById('result').textContent = `До вашего дня Рождения осталось ${result} дней!`;
      } else if (lastNum >= 2 && lastNum <= 4) {
        document.getElementById('result').textContent = `До вашего дня Рождения осталось ${result} дня!`;
      } else {
        document.getElementById('result').textContent = `До вашего дня Рождения остался ${result} день!`;
      }
    }
  } else {
    document.getElementById('result').textContent = 'Ошибка, введите корректную дату';
    document.getElementById('result').style.color = 'red';
  }
}

  const button = document.getElementById('calculateDaysUntilBirthday');
  button.onclick = calculateDaysUntilBirthday;