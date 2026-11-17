const player = {
    name: "Герой",
    health: 100,
    attackPower: 20
};

const monster = {
    name: "Гоблін",
    health: 80,
    attackPower: 15
};

const inventory = ["меч", "щит", "зілля"];

function attack() {
    monster.health = monster.health - player.attackPower;
    console.log(player.name + " атакує монстра!");
    console.log("Здоров'я монстра: " + monster.health + " HP");
}

function monsterAttack() {
    player.health = player.health - monster.attackPower;
    console.log(monster.name + " атакує героя!");
    console.log("Здоров'я героя: " + player.health + " HP");
}

function showStatus() {
    console.log("-------------------------");
    console.log("Гравець: " + player.name);
    console.log("Здоров'я: " + player.health + " HP");
    console.log("");
    console.log("Монстр: " + monster.name);
    console.log("Здоров'я: " + monster.health + " HP");
    console.log("-------------------------");
}

console.log("Гра «Битва з монстром»");
console.log("");
console.log("Інвентар героя: " + inventory.join(", "));
console.log("");

showStatus();

let round = 1;

while (player.health > 0 && monster.health > 0) {
    console.log("=== Раунд " + round + " ===");


    attack();


    if (monster.health <= 0) {
    break;
}


    monsterAttack();

    round = round + 1;
    console.log("");
}

console.log("");
if (player.health > 0) {
    console.log("Перемога!");
    console.log(player.name + " переміг монстра!");
} else {
    console.log("Поразка...");
    console.log(monster.name + " переміг героя...");
}