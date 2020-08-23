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
    const radius = 3;
    buttonBufferContext.beginPath();
    buttonBufferContext.moveTo(button.x + radius, button.y);
    buttonBufferContext.arcTo(button.x + button.width, button.y, button.x + button.width, button.y + button.height, radius);
    buttonBufferContext.arcTo(button.x + button.width, button.y + button.height, button.x, button.y + button.height, radius);
    buttonBufferContext.arcTo(button.x, button.y + button.height, button.x, button.y, radius);
    buttonBufferContext.arcTo(button.x, button.y, button.x + button.width, button.y, radius);
    buttonBufferContext.strokeStyle = "white"
    buttonBufferContext.stroke();
    return function drawbuttonLayer(context, color="green", camera) {
        buttonBufferContext.clearRect(0, 0, buttonBuffer.height, buttonBuffer.width);
        buttonBufferContext.fillStyle = color;
        buttonBufferContext.fill();
        buttonBufferContext.fillStyle = "white";
        buttonBufferContext.fillText(button.text, textX, textY);
        context.drawImage(buttonBuffer, 0, 0)
    }
}