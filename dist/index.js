
class Vehicle {
    make;
    model;
    year;
    rented;
    constructor(make, model, year, rented) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    getMake() {
        return this.make;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    getRented() {
        return this.rented;
    }
    setRented(rented) {
        this.rented = rented;
    }
    rent() {
        if (this.rented) {
            return `This ${this.make} ${this.model} is already rented.`;
        }
        else {
            this.rented = true;
            return `You have rented a ${this.make} ${this.model}.`;
        }
    }
    returnVehicle() {
        if (this.rented) {
            this.rented = false;
            return `Thank you for returning the ${this.make} ${this.model}.`;
        }
        else {
            return `This ${this.make} ${this.model} has not been rented yet.`;
        }
    }
}
class Car extends Vehicle {
    passengers;
    constructor(make, model, year, rented, passengers) {
        super(make, model, year, rented);
        this.passengers = passengers;
    }
    rentalRate() {
        return 50;
    }
    getPassengers() {
        return this.passengers;
    }
}
class Truck extends Vehicle {
    capacity;
    constructor(make, model, year, rented, capacity) {
        super(make, model, year, rented);
        this.capacity = capacity;
    }
    rentalRate() {
        return 100;
    }
    getCapacity() {
        return this.capacity;
    }
}
class Motorcycle extends Vehicle {
    engineSize;
    constructor(make, model, year, rented, engineSize) {
        super(make, model, year, rented);
        this.engineSize = engineSize;
    }
    rentalRate() {
        return 30;
    }
    getEngineSize() {
        return this.engineSize;
    }
}
const car = new Car('Toyota', 'Corolla', 2019, false, 5);
console.log(car.rent());
console.log(car.returnVehicle());
const truck = new Truck('Ford', 'F-150', 2021, false, 2000);
console.log(truck.rent());
console.log(truck.returnVehicle());
const motorcycle = new Motorcycle('Honda', 'China', 2020, false, 600);
console.log(motorcycle.rent());
console.log(motorcycle.returnVehicle());
//# sourceMappingURL=index.js.map