let passportMarried = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "Bobryisk"
    }
};
let passMar = structuredClone(passportMarried)
passMar.married = true;
console.log(passportMarried);
console.log(passMar);
