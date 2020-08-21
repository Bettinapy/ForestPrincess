import Matrix from './matrix';
import TileCollider from '../collision/tile-collider';

export default class Layer {
    constructor(){
        this.layers = [];
        this.tiles = new Matrix();
        this.characters = new Set();
        this.tileCollider = new TileCollider(this.tiles);
    }

    draw(context, camera){
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

        })
    }
}

