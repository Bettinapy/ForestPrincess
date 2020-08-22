export default class FixedTimeLoop{
    constructor(timestep = 1/60, gameOver){
        this.gameOver = gameOver;
        let accumulated_time = 0;
        let old_time_stamp = 0;
        this.updateTime = (new_time_stamp) => {

            accumulated_time += (new_time_stamp - old_time_stamp)/1000;
           
            // only update when accumulated time > timestep
            if(!this.gameOver){
                while (accumulated_time > timestep){
                    this.update(timestep);
                    accumulated_time -= timestep;
                }
                old_time_stamp = new_time_stamp;
                requestAnimationFrame(this.updateTime);
            }
        }
    }

    start(){
        requestAnimationFrame(this.updateTime)
    }

    
}