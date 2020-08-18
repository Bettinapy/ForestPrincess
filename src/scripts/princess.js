import MovingObject from './moving_objects';
import {loadPrincessIdle} from './sprite-load';
export function createPrincessIdle(){
    return loadPrincessIdle()
        .then(princess => {
            const princessIdle = new MovingObject();
            princessIdle.pos.setVector(0,7);
            princessIdle.vel.setVector(0.2,-0.6);

            princessIdle.draw = function drawPrincessIdle(context){
                debugger
                princess.draw("princessIdle", context, this.pos.x, this.pos.y, 3, 3);
            }
            return princessIdle;
        })
}