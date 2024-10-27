let numbers = [];


//для ограничения области видимости переменных создание массива вынесено в функцию
const makeArray = () => {
  i = 0;
  for (let num = -10; num <= 10; num++) {
    numbers[i] = num;
    i++;
  }
}


//удаление отрицательных значений
const deleteNegativeValues = (arr) => {
  const arrayWithoutNegativeValues = arr.filter((item) => item >= 0);
  return arrayWithoutNegativeValues;
}


//возведение в квадрат
const exponentiateArray = (arr) => {
  const exponentiatedArray = arr.map((item) => {
    return item**2;
  });
  return exponentiatedArray;
}


//сортировка в порядке убывания
const sortArray = (arr) => {
  arr.sort((a,b) => {return b-a});
}

//функция, выполняющая все требуемые манипуляции с массивом
const changeNumbers = (arr) => {
  arr = exponentiateArray(deleteNegativeValues(arr));
  sortArray(arr);
  console.log(arr);
}

makeArray();

changeNumbers(numbers)