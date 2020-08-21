import MovingObject from './movements/moving_objects';
import {loadPrincessIdle, loadPrincessRun} from './sprite-load';
import Jump from './movements/jump';
import Run from './movements/run';

import Player from './player';

export function createPrincessIdle(){
    return Promise.all([
        loadPrincessIdle(),
        loadPrincessRun()
    ]
    ).then(([pIdle, pRun]) => {
            const princess = new MovingObject();
            princess.size.setVector(60, 60)

            princess.jump = new Jump();
            princess.run = new Run();
            princess.player = new Player();
            
            const pRuns = ['run-1', 'run-2', 'run-3']
            
            princess.draw = function drawPrincess(context){
                        
                let pRunsIdx = (Math.floor(princess.run.distance / 10)) % pRuns.length;
                if(princess.run.dir !== 0){
                    pRun.draw(pRuns[pRunsIdx], context, 0,0,3,3, princess.run.dir < 0);
                }else{
                    pIdle.draw("idle-1", context, 0, 0, 3, 3);
                }
                                
            }
            return princess;
        })
}