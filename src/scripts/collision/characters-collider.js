import Sound from '../dashboard/sound';

class CharactersCollider{
    constructor(characters){
        this.characters = characters;
        this.sound = new Sound("src/audios/collision.wav")
    }

    check(obj){
        this.characters.forEach(character => {
            if(character === obj){
                return
            }
            if(character.boundaries.isCollide(obj.boundaries)){
                console.log('Collide! GAME OVER')
                this.sound.play();
                return true;
            }
        })
    }
}

export default CharactersCollider;