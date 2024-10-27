//переменные созданы в глобальной зоне видимости для предоставления к ним доступа из функций 
const cities = ['Казань', 'Санкт-Петербург', 'Екатеринбург', 'Москва', 'Новосибирск', 'Сочи'];

let temperatureValues = [];

//функция для заполнения массива с показателями температуры
const getTemperatureValue = () => {
  for (i = 0; i < cities.length; i++) {
    temperatureValues[i] = Number(prompt(`Введите температуру для города: ${cities[i]}`));
    console.log(typeof(temperatureValues[i]));
  };
};

//создание массива со значениями температуры
getTemperatureValue();

const temperatureList = document.createElement('ul');

//функция для  заполнения html-структуры списка
const createTemperatureList = () => {
  for (let i = 0; i < cities.length; i++) {
    const elementOfTemperatureList = document.createElement('li');
    elementOfTemperatureList.innerHTML = `  
  <p class="cityName"></p>
  <p class="temperatureValue"></p>
  `;
    elementOfTemperatureList.querySelector('.cityName').textContent = cities[i];
    elementOfTemperatureList.querySelector('.temperatureValue').textContent = temperatureValues[i];
    temperatureList.append(elementOfTemperatureList);
  }
  document.querySelector('.title').after(temperatureList);
}

createTemperatureList();

const findMinAndMaxTemperature = () => {
  let minMaxTemperature = document.createElement('p');
  minMaxTemperature.textContent = `Максимальная температура: ${Math.max(...temperatureValues)}, минимальная температура: ${Math.min(...temperatureValues)}`
  temperatureList.after(minMaxTemperature);
}

findMinAndMaxTemperature()