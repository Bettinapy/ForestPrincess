const HEIGHT = 400;
const WIDTH = 600;
class Sprite {
    constructor(image, width, height) {
        this.image = image;
        this.width = width;
        this.height = height;
        // this.tiles store all created sprites
        this.tiles = new Map();
    }

    create(name, x, y, width, height){
        const oppoEles = [false, true].map(flip => {
            if(!width) width = this.width;
            if(!height) height = this.height;
            const ele = document.createElement('canvas');
            ele.height = height;
            ele.width = width;
            const eleContext = ele.getContext('2d');

            if(flip){
                // rotate canvas horizontally
                eleContext.scale(-1,1);
                // hard coded here  
                eleContext.translate(-15, 0);
            }
            
            eleContext.drawImage(
                this.image,
                x,
                y,
                width,
                height,
                0,0,
                width,
                height
            );

            return ele;
        })
        this.tiles.set(name, oppoEles)
    }

    draw(name, context, x, y, resizeX=1, resizeY=1, flip=false){
        const ele = this.tiles.get(name)[flip ? 1 : 0];
        context.drawImage(ele, x, y, this.width*resizeX, this.height*resizeY);        
    }

    drawTile(name, context, x, y, resizeX = 1, resizeY = 1, flip=false) {
        const ele = this.tiles.get(name)[flip ? 1 : 0];
    
        context.drawImage(ele, x*this.width, y*this.height, this.width * resizeX, this.height * resizeY);
    }
}

export default Sprite;