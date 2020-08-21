class Jump{
    constructor(){
        this.duration = 0.1;
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
            this.exactTime -= timestep;
        }

    }
}

export default Jump;