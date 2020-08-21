class MovingObjectBoundary{
    constructor(pos, size){
        this.pos = pos;
        this.size = size;
    }

    isCollide(obj){
        return this.getBottom() > obj.getTop() 
            && this.getTop() < obj.getBottom() 
            && this.getLeft() < obj.getRight()
            && this.getRight() > obj.getLeft();
    }

    getBottom(){
        return this.pos.y + this.size.y;
    }

    getTop(){
        return this.pos.y
    }

    getLeft(){
        return this.pos.x
    }

    getRight(){
        return this.pos.x + this.size.x
    }
}

export default MovingObjectBoundary;