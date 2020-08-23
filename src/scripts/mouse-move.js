class MouseMove{
    listenTo(window){
        this.canvas.addEventListener('mousemove', this.hoverHandler);
        this.canvas.addEventListener('click', this.clickHandler);
    }
}

export default MouseMove;