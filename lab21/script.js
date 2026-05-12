class Автомобіль {
  constructor(марка, модель) {
    this.marka = марка;
    this.model = модель;
    this.zapysk = false;
  }

  завести() {
    this.zapysk = true;
    console.log(`${this.marka} ${this.model} заведено ✅`);
  }

  зупинити() {
    this.zapysk = false;
    console.log(`${this.marka} ${this.model} зупинено ⛔`);
  }
}

const car = new Автомобіль("Toyota", "Camry");

car.завести();
car.зупинити();