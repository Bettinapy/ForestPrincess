class Jump{
    constructor(){
        this.duration = 0.5;
        this.exactTime = 0;
        this.velocityY= 5;
        this.velocityX = 2;
    }

    start(){
        this.exactTime = this.duration;
        debugger
    }

    stop(){
        this.exactTime = 0;
    }

    update(character, timestep){
        if(this.exactTime > 0){
            debugger
            character.vel.y = -this.velocityY;
            character.vel.x = this.velocityX;
            this.exactTime -= timestep;
        }
        // character.pos.x += character.vel.x * timestep;
        // character.pos.y += character.vel.y * timestep*2;
    }
}

export default Jump;