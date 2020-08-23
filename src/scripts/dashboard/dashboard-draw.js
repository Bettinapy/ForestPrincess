
export function createTitleLayer(text, x, y, font){
    const titleBuffer = document.createElement('canvas');
    titleBuffer.height = 390;
    titleBuffer.width = 600;
    const titleBufferContext = titleBuffer.getContext('2d');
    titleBufferContext.font = "45px " + font;
    titleBufferContext.fillStyle = "white";
    titleBufferContext.textAlign = "center";
    return function drawTitleLayer(context){
        titleBufferContext.clearRect(0,0,600, 390);
        titleBufferContext.fillText(text,x,y);
        context.drawImage(titleBuffer, 0, 0);
    }
}

export function createButtonLayer(button) {
    const buttonBuffer = document.createElement('canvas');
    buttonBuffer.height = 390;
    buttonBuffer.width = 600;
    const buttonBufferContext = buttonBuffer.getContext('2d');
    const fontSize = 25;
    //buttonBufferContext.fillStyle = "white";
    const textSize = buttonBufferContext.measureText(button.text);
    buttonBufferContext.font = fontSize + "px VT323";
    const textX = button.x + (button.width / 2) - fontSize;
    const textY = button.y + (button.height / 2) + fontSize / 3;
    const radius = 3;
    buttonBufferContext.beginPath();
    buttonBufferContext.moveTo(button.x + radius, button.y);
    buttonBufferContext.arcTo(button.x + button.width, button.y, button.x + button.width, button.y + button.height, radius);
    buttonBufferContext.arcTo(button.x + button.width, button.y + button.height, button.x, button.y + button.height, radius);
    buttonBufferContext.arcTo(button.x, button.y + button.height, button.x, button.y, radius);
    buttonBufferContext.arcTo(button.x, button.y, button.x + button.width, button.y, radius);
    buttonBufferContext.strokeStyle = "white"
    buttonBufferContext.stroke();
    return function drawbuttonLayer(context, camera) {
        buttonBufferContext.clearRect(0, 0, buttonBuffer.height, buttonBuffer.width);
        if(!button.hovered){
            buttonBufferContext.fillStyle = "green";
        }else{
            buttonBufferContext.fillStyle = "#57AF55"
        }       
        buttonBufferContext.fill();
        buttonBufferContext.fillStyle = "white";
        buttonBufferContext.fillText(button.text, textX, textY);
        context.drawImage(buttonBuffer, 0, 0)
    }
}
 
