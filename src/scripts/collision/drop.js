import Sound from '../dashboard/sound';

class Drop{
    constructor(){
        this.sound = new Sound("src/audios/drop.wav");
    }

    check(character){
        if(character.pos.y + character.size.y > 350){
            //console.log('Drop! Game Over!');
            this.sound.play();
            return true
        }
        return false;
    }
}

export default Drop;