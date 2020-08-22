class Button{
    constructor(text, x, y, width, height, canvas, context, game){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.clicked = false;
        this.hovered = false;
        this.text = text;
        this.canvas = canvas;
        this.context = context;
        this.offsetLeft = this.canvas.offsetLeft;
        this.offsetTop = this.canvas.offsetTop;
        this.game = game;
        this.draw();
        const buttonBuffer = document.createElement('canvas');
        buttonBuffer.height = 390;
        buttonBuffer.width = 600;
        this.buttonBufferContext = buttonBuffer.getContext('2d');
    }

    getMousePos(event){
        return {
            x: event.clientX - this.offsetLeft,
            y: event.clientY - this.offsetTop
        };
    }

    isInside(pos){
        return (pos.x > this.x && pos.x < (this.x + this.width) && pos.y < (this.y + this.heigth) && pos.y > this.y)
    }

    hoverHandler(event){
        let mousePos = {
            x: event.clientX - this.offsetLeft,
            y: event.clientY - this.offsetTop
        };

        if (mousePos.x > this.x && mousePos.x < (this.x + this.width) && mousePos.y > this.y && mousePos.y < this.y + this.height){
            this.hovered = true;
            this.draw();
        }else{
            this.hovered = false;
            this.draw();         
        }
    }

    clickHandler(event){
        let mousePos = {
            x: event.clientX - this.offsetLeft,
            y: event.clientY - this.offsetTop
        };
        if (mousePos.x > this.x && mousePos.x < (this.x + this.width) && mousePos.y > this.y && mousePos.y < this.y + this.height){
            this.clicked = true;
            console.log('Start Game!')
            this.handler(this.game);
            
        }else{
            this.clicked = false;
            
        }
    }

    draw(){

        const buttonBuffer = document.createElement('canvas');
        buttonBuffer.height = this.canvas.height;
        buttonBuffer.width = this.canvas.width;
        const buttonBufferContext = buttonBuffer.getContext('2d');
        buttonBufferContext.clearRect(0, 0, buttonBuffer.height, buttonBuffer.width)
       
        const radius = 3;
        buttonBufferContext.beginPath();
        buttonBufferContext.moveTo(this.x + radius, this.y);
        buttonBufferContext.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + this.height, radius);
        buttonBufferContext.arcTo(this.x + this.width, this.y + this.height, this.x, this.y + this.height, radius);
        buttonBufferContext.arcTo(this.x, this.y + this.height, this.x, this.y, radius);
        buttonBufferContext.arcTo(this.x, this.y, this.x + this.width, this.y, radius);
        buttonBufferContext.closePath();
        //buttonBufferContext.fillRect(this.x, this.y, this.width, this.height);
        buttonBufferContext.strokeStyle = "white"
        buttonBufferContext.stroke();

        if (this.hovered) {
            buttonBufferContext.fillStyle = "#57AF55";
            buttonBufferContext.fill();
        } else {
            buttonBufferContext.fillStyle = "green";
            buttonBufferContext.fill();
        }
         
    
        const fontSize = 25;
        buttonBufferContext.fillStyle = "white";
        buttonBufferContext.font = fontSize + "px VT323";

        //text position
        const textSize = buttonBufferContext.measureText(this.text);
        const textX = this.x + (this.width / 2) ;
        const textY = this.y + (this.height / 2) + fontSize/3;

        buttonBufferContext.textAlign = "center"
        //draw the text
        buttonBufferContext.fillText(this.text, textX, textY);
        
        this.context.drawImage(buttonBuffer, 0,0)
    }


    listenMouse(){
        this.canvas.addEventListener('mousemove', this.hoverHandler.bind(this));
        this.canvas.addEventListener('click', this.clickHandler.bind(this));
    }
}

export default Button;