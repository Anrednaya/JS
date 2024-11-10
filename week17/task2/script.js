class Transport {
  constructor (type, price, brand) {
    this.type = type;
    this.price = price;
    this.brand = brand;
  }
  getInfo() {
    return `Тип: ${this.type}, Цена: ${this.price}, Бренд: ${this.brand}`
  }
  getPrice() {
    return this.price;
  }
}

class Car extends Transport {
  constructor(type, price, brand, doorsCount) {
    super(type, price, brand);
    this.doorsCount = doorsCount;
  }
  getDoorsCount() {
    return this.doorsCount;
  }
}

class Bike extends Transport {
  constructor (type, price, brand, maxSpeed) {
    super(type, price, brand);
    this.maxSpeed = maxSpeed;
  }
  getMaxSpeed() {
    return this.maxSpeed;
  }
}

const data = [
  {
    id: 1,
    type: 'car',
    brand: 'Audi',
    doors: 4,
    price: 4300000,
    image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/2020_Audi_e-Tron_Sport_50_Quattro.jpg/1200px-2020_Audi_e-Tron_Sport_50_Quattro.jpg>'
  },
  {
    id: 2,
    type: 'car',
    brand: 'Mercedes-Benz',
    doors: 4,
    price: 2800000,
    image: '<https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg/300px-2019_Mercedes-Benz_E220d_SE_Automatic_2.0_Front.jpg>'
  },
	{
    id: 3,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 210,
    price: 1300000,
    image: '<https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2022/2022-iron-883/2022-iron-883-016/2022-iron-883-016-motorcycle.jpg>'
  },
  {
    id: 4,
    type: 'bike',
    brand: 'Harley-Davidson',
    maxSpeed: 220,
    price: 1400000,
    image: '<https://cdn.dealerspike.com/imglib/products/harley-showroom/2020/livewire/main/Vivid-Black-Main.png>'
  }
];

const cars = [new Car(data[0].type, data[0].price, data[0].brand, data[0].doors), new Car(data[1].type, data[1].price, data[1].brand, data[1].doors)];
console.log(cars); 

const bikes = [new Bike(data[2].type, data[2].price, data[2].brand, data[2].maxSpeed), new Bike(data[3].type, data[3].price, data[3].brand, data[3].maxSpeed)];
console.log(bikes); 