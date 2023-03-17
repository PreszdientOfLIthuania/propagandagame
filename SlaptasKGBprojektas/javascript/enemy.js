const ENEMY = document.getElementById("enemy");

const ENEMY_COUNT = 3;

for (let i = 0; i < ENEMY_COUNT; ++i){
    console.log(ENEMY);
    let new_enemy = ENEMY.content.cloneNode(true)
    document.getElementById("gamescreen").appendChild(new_enemy)
}