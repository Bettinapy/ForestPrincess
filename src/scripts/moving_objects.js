import {Vector} from './vectors';

class MovingObject{
    constructor(options){
        this.pos = new Vector(0,0);
        this.vel = new Vector(0, 0);
    }
    
    update(timestep){
        // multiplying the velocity by the amount of time (timestep)
        // that has passed between rendering frames
        this.pos.x += this.vel.x * timestep ;
        this.pos.y += this.vel.y * timestep *1.8;
      
    }
}

export default MovingObject;