class Button{
    constructor(text, x, y, width, height, canvas, game){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.clicked = false;
        this.hovered = false;
        this.text = text;
        this.canvas = canvas;
        this.offsetLeft = this.canvas.offsetLeft;
        this.offsetTop = this.canvas.offsetTop;
        this.game = game;
        this.buttonBuffer = document.createElement('canvas');
        this.buttonBuffer.height = 390;
        this.buttonBuffer.width = 600;
        this.buttonBufferContext = this.buttonBuffer.getContext('2d');
        const fontSize = 25;
        this.buttonBufferContext.fillStyle = "white";
        this.buttonBufferContext.font = fontSize + "px VT323";

        //text position
        const textSize = this.buttonBufferContext.measureText(this.text);
        this.textX = this.x + (this.width / 2);
        this.textY = this.y + (this.height / 2) + fontSize / 3;

        this.buttonBufferContext.textAlign = "center"
        //this.draw();
        this.hoverHandler = this.hoverHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);
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
        event.preventDefault();
        let mousePos = {
            x: event.clientX - this.offsetLeft,
            y: event.clientY - this.offsetTop
        };

        if (mousePos.x > this.x && mousePos.x < (this.x + this.width) && mousePos.y > this.y && mousePos.y < this.y + this.height){
            this.hovered = true;
            
        }else{
            this.hovered = false;
                   
        }
        this.draw();  
    }

    clickHandler(event){
        event.preventDefault();
        const mousePos = {
            x: event.clientX - this.offsetLeft,
            y: event.clientY - this.offsetTop
        };

        const last_click = this.clicked;
        console.log(last_click)
        if (mousePos.x > this.x && mousePos.x < (this.x + this.width) && mousePos.y > this.y && mousePos.y < this.y + this.height){
            if(!last_click){
                this.clicked = true;
                console.log('Start Game!');           
                this.handler(this.game);}          
            
        }else{
            this.clicked = false;
            
        }
    }

    draw(context){
        // const buttonBuffer = document.createElement('canvas');
        // buttonBuffer.height = this.canvas.height;
        // buttonBuffer.width = this.canvas.width;
        // const buttonBufferContext = buttonBuffer.getContext('2d');
        this.buttonBufferContext.clearRect(0, 0, this.buttonBuffer.width, this.buttonBuffer.height)
       
        const radius = 3;
        // this.buttonBufferContext.beginPath();
        // this.buttonBufferContext.moveTo(this.x + radius, this.y);
        // this.buttonBufferContext.arcTo(this.x + this.width, this.y, this.x + this.width, this.y + this.height, radius);
        // this.buttonBufferContext.arcTo(this.x + this.width, this.y + this.height, this.x, this.y + this.height, radius);
        // this.buttonBufferContext.arcTo(this.x, this.y + this.height, this.x, this.y, radius);
        // this.buttonBufferContext.arcTo(this.x, this.y, this.x + this.width, this.y, radius);
        // this.buttonBufferContext.strokeStyle = "white"
        // this.buttonBufferContext.stroke();
        // if (this.hovered) {
        //     this.buttonBufferContext.fillStyle = "#57AF55";
        //     this.buttonBufferContext.fill();
        // } else {
        //     this.buttonBufferContext.fillStyle = "green";
        //     this.buttonBufferContext.fill();
        // }
        //this.buttonBufferContext.closePath();
        //buttonBufferContext.fillRect(this.x, this.y, this.width, this.height);

         
    
    //     const fontSize = 25;
    //    this.buttonBufferContext.fillStyle = "white";
    //     this.buttonBufferContext.font = fontSize + "px VT323";

    //     //text position
    //     const textSize = this.buttonBufferContext.measureText(this.text);
    //     const textX = this.x + (this.width / 2) ;
    //     const textY = this.y + (this.height / 2) + fontSize/3;

    //     this.buttonBufferContext.textAlign = "center"
        //draw the text
        this.buttonBufferContext.fillText(this.text, this.textX, this.textY);
        
        context.drawImage(this.buttonBuffer, 0,0)
    }


    // listenMouse(){
    //     this.canvas.addEventListener('mousemove', this.hoverHandler);
    //     this.canvas.addEventListener('click', this.clickHandler);
    // }
}

export default Button;