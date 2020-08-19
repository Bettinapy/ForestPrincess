class Run {
    constructor() {
        this.speed = 300;
        this.dir = 0;
    }

    update(character, timestep) {
 
        character.vel.x = this.speed * this.dir * timestep;
    }
}

export default Run;