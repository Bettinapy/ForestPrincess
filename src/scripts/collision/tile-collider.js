import PosConverter from './pos-converter';

class TileCollider {
    constructor(tilesMatrix) {
        this.tiles = new PosConverter(tilesMatrix);
    }

    checkCollisionY(character){
        let y;
        if (character.vel.y > 0) {
            y = character.pos.y + character.size.y
        } else if (character.vel.y < 0 ) {
            y = character.pos.y;
        } else {
            return;
        }
        
        const matches = this.tiles.getByRange(character.pos.x, character.pos.x + character.size.x, y, y);
      
        matches.forEach(match=>{
            if (match.tile.name !== 'flatGround' && match.tile.name !== 'ground' && match.tile.name !== 'greenGrass'){
                return
            }
            if(character.vel.y > 0){
    
                if (character.pos.y + character.size.y >= match.ytop) {
                    character.pos.y = match.ytop - character.size.y;
                    character.vel.y = 0;
                }
            } else if (character.vel.y < 0) {
                if (character.pos.y < match.ybottom) {
                    character.pos.y = match.ybottom;
                    character.vel.y = 0;
                }
            }

        })
    }

    checkCollisionX(character) {
        let x;
        if (character.vel.x > 0) {
            x = character.pos.x + character.size.x
        } else if (character.vel.x < 0) {
            x = character.pos.x;
        } else {
            return;
        }

        const matches = this.tiles.getByRange(x, x, character.pos.y, character.pos.y + character.size.y)

        matches.forEach(match=>{
            if (match.tile.name !== 'flatGround' && match.tile.name !== 'ground' && match.tile.name !== 'greenGrass') {
                return
            }
            
            if (character.vel.x > 0) { 
                if (character.pos.x + character.size.x > match.xleft) {
                    character.pos.x = match.xleft - character.size.x;
                    character.vel.x = 0;
                }
            } else if (character.vel.x < 0) {
                if (character.pos.x < match.xright) {
                    character.pos.x = match.xright;
                    character.vel.x = 0;
                }
            }

        })
    }

}

export default TileCollider;