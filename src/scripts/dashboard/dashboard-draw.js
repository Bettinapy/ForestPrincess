
export function drawTitle(context){
    const titleBuffer = document.createElement('canvas');
    titleBuffer.height = 60;
    titleBuffer.width = 60;
    const titleBufferContext = titleBuffer.getContext('2d');
    context.font = "45px Bungee Shade";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText('Forest', 300, 100);
    context.fillText('Princess', 300, 150);
}

export function drawGameOverTitle(context){
    context.font = "45px VT323";
    context.fillStyle = "white";
    context.textAlign = "center";
    context.fillText('Game Over', 300, 100);

}

