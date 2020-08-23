export default class FixedTimeLoop{
    constructor(timestep = 1/60){
        let accumulated_time = 0;
        let old_time_stamp = 0;
        this.requestId = undefined;
        this.gameOver = false;
        this.updateTime = (new_time_stamp) => {

            accumulated_time += (new_time_stamp - old_time_stamp)/1000;
           
            // only update when accumulated time > timestep

                while (accumulated_time > timestep){
                    if(this.update(timestep)==='Game Over'){
                        this.gameOver = true;
                    };
                    accumulated_time -= timestep;
                }
                old_time_stamp = new_time_stamp;
                if(!this.gameOver){
                    this.requestId = this.start();
                }else{
            
                    old_time_stamp = 0;
                    this.stop();
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