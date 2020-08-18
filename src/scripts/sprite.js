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

    create(name, x, y){
        const ele = document.createElement('canvas');
        ele.height = this.height;
        ele.width = this.width;
        ele.getContext('2d').drawImage(
            this.image,
            x,
            y,
            this.width,
            this.height,
            0,0,
            this.width,
            this.height
        );
        this.tiles.set(name, ele)
    }

    draw(name, context, x, y, resizeX=1, resizeY=1){
        debugger
        const ele = this.tiles.get(name);
        context.drawImage(ele, x*this.width, y*this.height, this.width*resizeX, this.height*resizeY);        
    }
}

module.exports = Sprite;