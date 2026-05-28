
class Електромобіль extends Автомобіль {
  constructor(марка, модель, батарея) {
    super(марка, модель); 
    this.battery = батарея; 
  }

  зарядити() {
    console.log(`${this.marka} ${this.model} заряджається... Ємність: ${this.battery} кВт·год`);
  }
}

const myTesla = new Електромобіль("Tesla", "Model 3", 75);

myTesla.завести();   
myTesla.зарядити();  