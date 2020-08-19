class Run {
    constructor() {
        this.speed = 1000;
        this.dir = 0;
    }

    update(character, timestep) {
        debugger
        character.vel.x = this.speed * this.dir * timestep;
        character.pos.x += character.vel.x * timestep;
        this.dir = 0;
        //character.pos.y += character.vel.y * timestep * 1.8;
    }
}

export default Run;