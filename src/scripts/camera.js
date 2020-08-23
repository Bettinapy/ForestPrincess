import Vector from './movements/vectors';

class Camera{
    constructor(){
        this.pos = new Vector(0,0);
        this.size = new Vector(600, 390);
    }
}

export default Camera;