const employee = {
  id: 100,
  name: "Jhon",
  lastName: "Doe",
  address: "Clover Hill Plaza",
  age: "24",
};

// The proxy constructor takes two arguments i.e object and a handler
const employeeProxy = new Proxy(employee, {
  get: (obj, key) => {
    if (!obj[key]) {
      console.log("Property does not exists on the employee object ");
    }
    return obj[key];
  },
  set: (obj, key, value) => {
    if (!obj[key]) {
      console.log("Property does not exists on the employee object ");
    } else if (key === "name" && value.length < 2) {
      console.log("Name should be of at least 3 character");
    } else if (key === "id") {
      console.log("You cannot modify id");
    } else if (key === "age" && typeof value !== "number") {
      console.log("Age can only be assigned numeric value");
    } else {
      obj[key] = value;
    }
  },
});

console.log(employeeProxy.name);
employeeProxy.nonExistingKey;
employeeProxy.age = "rushabh";
