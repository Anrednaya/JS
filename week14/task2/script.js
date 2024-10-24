//функция для обнуления полей с показателями (используется при создании нового массива оценок 17 строка)
function clearCounts () {
  document.getElementById('mediana').textContent = 'Средний балл: ';
  document.getElementById('max').textContent = 'Максимальный балл: ';
  document.getElementById('min').textContent = 'Минимальный балл: ';
  document.getElementById('positive').textContent = 'Количество получивших положительную оценку (балл выше или равен 60): ';
  document.getElementById('negative').textContent = 'Количество получивших отрицательную оценку (балл ниже 60): ';
  document.getElementById('toLetterFormat').textContent = 'Оценки в формате A/B/C/D/E: ';
}

//чтобы массив с оценками сохранился в глобальной зоне видимости и можно было производить с ним манипуляции
let grades = [];

//создание массива с оценками:
function getGrades() {
  document.getElementById('grades').textContent = 'Оценки студентов: ';
  clearCounts();
  for (let i = 0; i < 12; i++) {
    grades[i] = Math.floor(Math.random() * 101)
  };
  document.getElementById('grades').textContent = document.getElementById('grades').textContent + grades.join(', ');
}

//обработчик события на кнопку, запускающую создание массива оценок
document.getElementById('getGrades').onclick = getGrades;

//функция, вычисляющая средний балл
function mediana() {
  let sum = 0;
  grades.forEach(item => {
    sum = sum + item;
  })
  return (sum / (grades.length));
}

//функция, возвращающая максимальный балл
function max() {
  return Math.max(...grades);
}

//функция, возвращающая минимальный балл
function min() {
  return Math.min(...grades);
}

//функция, возвращающая количество положительных оценок (второй вариант ниже)
function positive() {
  let quantity = 0;
  grades.forEach(grade => {
    if (grade >= 60) {
      quantity++;
    }
  });
  return quantity;
}

//второй вариант вычисления количества положительных оценок через метод filter()
// function positive () {
//   const positiveGrades = grades.filter((grade) => grade >= 60);
//   return positiveGrades.length;
// }

//функция, возвращающая количество отрицательных оценок (аналогично можно сделать несколькими способами, или даже просто вычесть из лющего количества оценок количество положительных)
function negative() {
  const negativeGrades = grades.filter((grade) => grade < 60);
  return negativeGrades.length;
}

//функция, возвращающая новый массив с оценками в буквенном эквиваленте
function toLetterFormat() {
  let gradesInLetterFormat = grades.map((grade) => {
    let letter;
    switch (true) {
      case (grade >= 80):
        letter = 'A';
        break
      case (grade >= 60):
        letter = 'B';
        break
      case (grade >= 40):
        letter = 'C';
        break
      case (grade >= 20):
        letter = 'D';
        break
      default:
        letter = 'E';
    }
    return letter;
  })
  return gradesInLetterFormat;
}

//функция, выводящая информацию в html документ
function getCounts() {
  document.getElementById('mediana').textContent = 'Средний балл: ' + mediana().toFixed(2);
  document.getElementById('max').textContent = 'Максимальный балл: ' + max();
  document.getElementById('min').textContent = 'Минимальный балл: ' + min();
  document.getElementById('positive').textContent = 'Количество получивших положительную оценку (балл выше или равен 60): ' + positive();
  document.getElementById('negative').textContent = 'Количество получивших отрицательную оценку (балл ниже 60): ' + negative();
  document.getElementById('toLetterFormat').textContent = 'Оценки в формате A/B/C/D/E: ' + toLetterFormat().join(' ');
};

document.getElementById('getCounts').onclick = getCounts;
