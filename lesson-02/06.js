let passportWithAddress = {
    name: "Petr",
    surname: "Petrov",
    address: {
        country: "USA",
        city: "LA"
    }
};
let newPass = structuredClone(passportWithAddress)
newPass.address.city='Bobryisk';
console.log(passportWithAddress.address.city);
console.log(newPass.address.city);