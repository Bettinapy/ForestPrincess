import MovingObject from './movements/moving_objects';
import {loadPrincessIdle} from './sprite-load';
import Jump from './movements/jump';
import Velocity from './movements/velocity';
import Run from './movements/run';

export function createPrincessIdle(){
    return loadPrincessIdle()
        .then(princess => {
            const princessIdle = new MovingObject();
            princessIdle.size.setVector(60, 60)

            princessIdle.jump = new Jump();
            princessIdle.run = new Run();
            princessIdle.move = new Velocity();

            princessIdle.draw = function drawPrincessIdle(context){
    
                princess.draw("princessIdle", context, this.pos.x, this.pos.y, 3, 3);
            }
            return princessIdle;
        })
}