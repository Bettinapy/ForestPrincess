import Sound from '../dashboard/sound';

class Jump{
    constructor(){
        this.duration = 0.1;
        this.exactTime = 0;
        this.velocityY= 500;
        this.velocityX = 20;
        this.sound = new Sound("src/audios/jump.wav")
        this.sound.setVolumne(0.3)
    }

    start(){
        this.exactTime = this.duration;
        this.sound.play();
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