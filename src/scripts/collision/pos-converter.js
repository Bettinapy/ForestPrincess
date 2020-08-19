// conver the real world position to index
class PosConverter{
    constructor(matrix, tileSize=30){
        this.matrix = matrix;
        this.tileSize = tileSize;
    }

    posToIndex(pos){
        return Math.floor(pos/this.tileSize)
    }

    getByIndex(iX, iY){
        const tile = this.matrix.get(iX, iY);
        const ytop = iY* this.tileSize;
        const ybottom = ytop + this.tileSize;
        const xleft = iX * this.tileSize;
        const xright = xleft + this.tileSize;

        if(tile){
            return {
                tile,
                ytop,
                ybottom, 
                xleft,
                xright 
            }
        }
    }

    matchPos(posX, posY){

        return this.getByIndex(this.posToIndex(posX), this.posToIndex(posY))
    }

}

export default PosConverter;