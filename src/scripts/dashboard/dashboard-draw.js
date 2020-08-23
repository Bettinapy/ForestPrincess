

export function drawDashboardBg(bg, context){
    bg.draw("mainBg", context, 0, 0, 2, 2)
}

export function drawTitle(context){
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

