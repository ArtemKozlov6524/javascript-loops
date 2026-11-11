const users = [
    { name: "Андрій", email: "andriy@gmail.com", age: 22 },
    { name: "Марія", email: "maria@gmail.com", age: 19 },
    { name: "Олег", email: "oleg@gmail.com", age: 25 }
];

for (const user of users) {
    const { name, email, age } = user;
    console.log(name, email, age);
}
