// Add a player control property to princess, then add 
// timer & score to player control
// Create a dashboard to display timer and score
import Timer from './dashboard/timer';

class Player{
    constructor(){
        this.score = 0;
        this.timer = new Timer();
    }

    update(timestep){
        this.timer.updateTime(timestep);
    }

    reset(){
        this.timer.resetTime();
    }
}

export default Player;