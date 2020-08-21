class Timer{
    constructor(time=0){
        this.time = time;
    }

    updateTime(timestep){
        this.time += timestep
    }

    draw(context, x, y){
        console.log(`Time: ${Math.round(this.time)}`);
        context.font = "30px VT323";
        context.fillStyle = 'white';
        context.fillText(`Time: ${Math.round(this.time)}`, x, y)
    }
}

export default Timer;