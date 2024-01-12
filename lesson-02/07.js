let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
passportMarried.married = true;
let passMar = structuredClone(passportMarried)
passMar.married = false;
console.log(passportMarried);
console.log(passMar);
