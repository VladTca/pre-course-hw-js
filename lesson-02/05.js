let passport = {
    name: "Petr",
    surname: "Petrov",
};

let passCopy = {...passport};
passCopy.name = 'Ivan';
console.log(passport.name);
console.log(passCopy.name);