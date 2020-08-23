import Sound from '../dashboard/sound';

class CharactersCollider{
    constructor(characters){
        this.characters = characters;
        this.sound = new Sound("src/audios/collision.wav")
    }

    check(obj){
        let result = false;
        this.characters.forEach(character => {
            if(character === obj){
                result = false;
                return;
            }
            if(character.boundaries.isCollide(obj.boundaries)){
                console.log('Collide! GAME OVER')
                this.sound.play();
                result = true;
            }
        })
        return result;
    }
}

export default CharactersCollider;