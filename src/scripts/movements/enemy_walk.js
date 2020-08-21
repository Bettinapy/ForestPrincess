class EnemyWalk {
    constructor() {
        this.speed = 4000;
        this.enemyDir = -1;
        this.distance = 0;
    }

    update(character, timestep) {
        character.vel.x = this.speed * this.enemyDir * timestep;
        this.distance += Math.abs(character.vel.x * timestep);
    }
}

export default EnemyWalk;