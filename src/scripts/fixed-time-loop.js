export default class FixedTimeLoop{
    constructor(timestep = 1/60){
        let accumulated_time = 0;
        let new_time_stamp;
        let old_time_stamp = 0;
        this.requestId = undefined;
        this.gameOver = false;
        this.updateTime = (timestamp) => {
            if(new_time_stamp === undefined){
                new_time_stamp = timestamp;
            }
            accumulated_time += (timestamp - new_time_stamp)/1000;
           
            // only update when accumulated time > timestep

                while (accumulated_time > timestep){
                    if(this.update(timestep)==='Game Over'){
                        this.gameOver = true;
                    };
                    accumulated_time -= timestep;
                }
                new_time_stamp = timestamp;
                if(!this.gameOver){
                    this.start();
                }else{            
                    accumulated_time = 0;
                    cancelAnimationFrame(this.requestId);
                    new_time_stamp = undefined;
                    this.requestId = undefined;
                }
        }
    }

    start(){
        this.requestId = requestAnimationFrame(this.updateTime)
    }

    stop(){
        cancelAnimationFrame(this.requestId)
    }

    
}