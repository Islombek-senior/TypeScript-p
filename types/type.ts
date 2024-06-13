interface ColorCar {
  speed: number;
  name: string;
  coloR: string;
  id: number;
}

export class Car implements ColorCar {
  speed: number;
  name: string;
  coloR: string;
  id: number;
  constructor(speed: number, name: string, coloR: string, id: number) {
    console.log(`The speed is ${speed} km of ${coloR}  ${name}`);
    this.name = name;
    this.speed = speed;
    this.coloR = coloR;
    this.id = id;
  }
}

// new Car(350, "Ferrari", "Red", 1);
// new Car(300, "Lamborghini", "Black", 1);
// new Car(301, "Lexus", "Blue", 1);
// new Car(360, "BMW ", "Midnight", 1);
// new Car(320, "Porse", "Yellow", 1);
