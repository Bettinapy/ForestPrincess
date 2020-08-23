
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
    buttonBufferContext.fillStyle = "white";
    buttonBufferContext.font = fontSize + "px VT323";
    const textX = button.x + (button.width / 2);
    const textY = button.y + (button.height / 2) + fontSize / 3;
    return function drawbuttonLayer(context, camera) {
        buttonBufferContext.clearRect(0, 0, buttonBuffer.height, buttonBuffer.width);
        buttonBufferContext.fillText(button.text, textX, textY);
        context.drawImage(buttonBuffer, 0, 0)
    }
}
 
