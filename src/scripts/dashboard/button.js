import {createButtonLayer} from './dashboard-draw';
class Button{
    constructor(text, x, y, width, height, canvas){
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
        this.hoverHandler = this.hoverHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);

        this.buttonLayer = createButtonLayer(this)
    }

    getMousePos(event){
        return {
            x: event.clientX - this.offsetLeft,
            y: event.clientY - this.offsetTop
        };
    }

    hoverHandler(event, context){
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
        this.buttonLayer(context);
        
    }

    clickHandler(event,context){
        event.preventDefault();
        const mousePos = {
            x: event.clientX - this.offsetLeft,
            y: event.clientY - this.offsetTop
        };

        const last_click = this.clicked;
  
        if (mousePos.x > this.x && mousePos.x < (this.x + this.width) && mousePos.y > this.y && mousePos.y < this.y + this.height){
            context.clearRect(0, 0, 600,390)
            if(!last_click){
                this.clicked = true;
                console.log('Start Game!');           
                this.handler();}          
            
        }else{
            this.clicked = false;
            
        }
    }


}

export default Button;