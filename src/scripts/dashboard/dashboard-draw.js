

export function drawDashboardBg(bg, context){
    bg.draw("mainBg", context, 0, 0, 2, 2)
}

export function drawTitle(context){
    const titleBuffer = document.createElement('canvas');
    titleBuffer.height = 300;
    titleBuffer.width = 300;
    const titleBufferContext = titleBuffer.getContext('2d');
    titleBufferContext.font = "45px Bungee Shade";
    titleBufferContext.fillStyle = "white";
    titleBufferContext.textAlign = "center";
    titleBufferContext.fillText('Forest', 150, 40);
    titleBufferContext.fillText('Princess', 150, 100);
    context.drawImage(titleBuffer, 160, 80);
}

