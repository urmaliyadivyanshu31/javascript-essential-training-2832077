/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const mobilePhone = {
    name: "Samsung Galaxy S20",
    color: "black",
    storage: 128,
    camera: 12,
    battery: 4000,
    isCharging: false,
    charge: function (isCharging) {
        this.isCharging = isCharging;
    }
}

const laptop = {
    name: "MacBook Pro",
    color: "silver",
    storage: 512,
    ram: 16,
    battery: 10000,
    isCharging: false,
    charge: function (isCharging) {
        this.isCharging = isCharging;
    }

}

const car = {
    name: "BMW 3 Series",
    color: "black",
    engine: "2.0L",
    transmission: "automatic",
    fuel: "gasoline",
    isCharging: false,
    charge: function (isCharging) {
        this.isCharging = isCharging;
    }
}
console.log("The mobilePhone object", mobilePhone)
console.log("The laptop object", laptop)
console.log("The car object", car)