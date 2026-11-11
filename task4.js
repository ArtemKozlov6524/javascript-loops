const person = {
    firstName: "Олена",
    lastName: "Петренко",
    age: 25
};

person.email = "olena@example.com";

delete person.age;

console.log(person);