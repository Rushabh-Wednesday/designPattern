const bike = require("./bike");
const car = require("./car");
const truck = require("./truck");
const makeVehicle = require("./factoryPattern");

// function createVehicle(vehicleType) {
//   let vehicle;
//   if (vehicleType === "car") {
//     vehicle = car();
//   } else if (vehicleType === "bike") {
//     vehicle = bike();
//   } else if (vehicleType === "truck") {
//     vehicle = truck();
//   } else {
//     console.log("The vehicle you want does not exists in the world");
//     return;
//   }

//   return vehicle;
// }
// const vehicle = createVehicle("car");
// console.log(vehicle);



function createVehicle(vehicleType) {
  return makeVehicle(vehicleType);
}
const vehicle = createVehicle("car");
console.log(vehicle);
