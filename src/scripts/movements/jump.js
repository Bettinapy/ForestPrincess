class Jump{
    constructor(){
        this.duration = 0.05;
        this.exactTime = 0;
        this.velocityY= 500;
        this.velocityX = 20;
    }

    start(){
        this.exactTime = this.duration;
 
    }

    stop(){
        this.exactTime = 0;
    }

    update(character, timestep){
        if(this.exactTime > 0){
     
            character.vel.y = -this.velocityY;
            //character.vel.x = this.velocityX;
            this.exactTime -= timestep;
        }
        // character.pos.x += character.vel.x * timestep;
        // character.pos.y += character.vel.y * timestep*2;
    }
}

export default Jump;