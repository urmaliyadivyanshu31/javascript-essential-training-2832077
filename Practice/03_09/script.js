/**
 * Practice: Making methods
 *
 * - Create a method for each object property.
 * - The method receives a value to match the property to be changed.
 * - Create a simple function to replace the current property value with the received value.
 * - Test the method by sending new values and checking the properties in the console.
 */

const backpack = {
  name: "Everyday Backpack",
  volume: 30,
  color: "grey",
  pocketNum: 15,
  lidOpen: false,
  strapLength: {
    left: 26,
    right: 26,
  },
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  }, // Method for lidOpen
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }, // Method for strapLength
  newPocket: function (nums) {
    this.pocketNum = nums;
  }, // Method for pocketNum
  newColor: function (color) {
    this.color = color;
  }, // Method for color
  newVolume: function (volume) {
    this.volume = volume;
  } // Method for volume

};

console.log(backpack)
console.log(backpack.toggleLid())
console.log(backpack.newStrapLength())
console.log(backpack.newPocket())
console.log(backpack.newColor())
console.log(backpack.newVolume())
