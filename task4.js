let passwords = ["12345", "password", "admin123"];
let i = 0;
let found = false;

do {
    let currentPassword = passwords[i];

    if (currentPassword === "admin123") {
        console.log("Доступ дозволено");
        found = true;
    } else {
        console.log("Неправильний пароль");
    }

    i = i + 1;

} while (!found && i < passwords.length);

if (!found) {
    console.log("Все пароли неправильные. Доступ запрещён.");
}