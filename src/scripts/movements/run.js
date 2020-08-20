class Run {
    constructor() {
        this.speed = 300;
        this.dir = 0;
        this.distance = 0;
    }

    update(character, timestep) {
 
        character.vel.x = this.speed * this.dir * timestep;
        if (this.dir){
            this.distance += Math.abs(character.vel.x * timestep);
        } else{
            this.distance = 0;
        }
    }
}

export default Run;