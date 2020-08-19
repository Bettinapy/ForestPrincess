import MovingObject from './movements/moving_objects';
import {loadPrincessIdle} from './sprite-load';
import Jump from './movements/jump';
import Velocity from './movements/velocity';
import Run from './movements/run';

export function createPrincessIdle(){
    return loadPrincessIdle()
        .then(princess => {
            const princessIdle = new MovingObject();

            princessIdle.jump = new Jump();
            princessIdle.move = new Velocity();
            princessIdle.run = new Run();
            princessIdle.draw = function drawPrincessIdle(context){
    
                princess.draw("princessIdle", context, this.pos.x, this.pos.y, 3, 3);
            }
            return princessIdle;
        })
}