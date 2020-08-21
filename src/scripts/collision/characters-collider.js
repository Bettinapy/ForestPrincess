class CharactersCollider{
    constructor(characters){
        this.characters = characters;
    }

    check(obj){
        this.characters.forEach(character => {
            if(character === obj){
                return
            }
            if(character.boundaries.isCollide(obj.boundaries)){
                console.log('Collide! GAME OVER')
                return true;
            }
        })
    }
}

export default CharactersCollider;