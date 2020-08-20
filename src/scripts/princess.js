import MovingObject from './movements/moving_objects';
import {loadPrincessIdle, loadPrincessRun} from './sprite-load';
import Jump from './movements/jump';
import Run from './movements/run';

export function createPrincessIdle(){
    return Promise.all([
        loadPrincessIdle(),
        loadPrincessRun()
    ]
    ).then(([pIdle, pRun]) => {
            const princess = new   MovingObject();
            princess.size.setVector(60, 60)

            princess.jump = new Jump();
            princess.run = new Run();

            const pRuns = ['run-1', 'run-2', 'run-3']
            
            princess.draw = function drawPrincess(context){
        
                //princess.draw("princessIdle", context, this.pos.x, this.pos.y, 3, 3);                
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