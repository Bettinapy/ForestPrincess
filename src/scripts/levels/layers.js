import Matrix from './matrix';
import TileCollider from '../collision/tile-collider';
import CharactersCollider from '../collision/characters-collider';
import Drop from '../collision/drop';

export default class Layer {
    constructor(){
        this.layers = [];
        this.tiles = new Matrix();
        this.characters = new Set();
        this.charactersCollider = new CharactersCollider(this.characters);
        this.tileCollider = new TileCollider(this.tiles);
        this.characterDrop = new Drop();
        this.gameOver = false;
    }

    draw(context, camera=0){
        this.layers.forEach(layer => {
            layer(context, camera)
        })
    }

    update(timestep, camera){
        const gravity = 2000;
        this.characters.forEach(character => {
            // princess
            if(character.jump){
                character.jump.update(character, timestep);
                character.run.update(character, timestep);
                character.player.update(timestep);
            }
            
            // enemy
            if(character.walk){
                character.walk.update(character, timestep);
            }
            
            character.pos.x += character.vel.x * timestep;
            this.tileCollider.checkCollisionX(character);

            character.pos.y += character.vel.y * timestep;
            this.tileCollider.checkCollisionY(character);
                                    
            character.vel.y += gravity * timestep;
            
            // Game logic, lose when drop
            if(character.jump){
                if(this.characterDrop.check(character)){
                    character.player.reset();
                    this.gameOver = true;
                    return;
                };
            }

        })
        

        // Game logic, lose when collide
        this.characters.forEach(character => {
            if(this.charactersCollider.check(character)){
                character.player.reset();
                this.gameOver = true;
            };
        })
    }
}

