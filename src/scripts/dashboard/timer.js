class Timer{
    constructor(time=0){
        this.time = time;
        this.timerBuffer = document.createElement('canvas');
        this.timerBuffer.height = 390;
        this.timerBuffer.width = 600;
        this.timerBufferContext = this.timerBuffer.getContext('2d');
        this.timerBufferContext.font = "30px VT323";
        this.timerBufferContext.fillStyle = 'white';
    }

    updateTime(timestep){
        this.time += timestep
    }

    resetTime(){
        this.time = 0
    }

    draw(context, x, y){
        this.timerBufferContext.clearRect(0,0,600,390)
        this.timerBufferContext.fillText(`Time: ${Math.round(this.time)}`, x, y)

        context.drawImage(this.timerBuffer, 0, 0)
    }
}

export default Timer;