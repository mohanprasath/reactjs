// Classes

// came to be after ES5
// Was heavily used by React till recently, now React uses functions
// Prototypical Inheritance?"This technique can be wielded to create structures that feel object-oriented."

class Vacation {
  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  print() {
    console.log(`${this.destination} will take ${this.length} days.`);
  }
}

const trip = new Vacation("Santiago, Chile", 7);

trip.print(); // Chile will take 7 days.

class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }

  print() {
    super.print();
    console.log(`Bring your ${this.gear.join(" and your ")}`);
  }
}

const tripExp = new Expedition("Mt. Whitney", 3, [
  "sunglasses",
  "prayer flags",
  "camera",
]);

tripExp.print();
