// conver the real world position to index
class PosConverter{
    constructor(matrix, tileSize=30){
        this.matrix = matrix;
        this.tileSize = tileSize;
    }

    posToIndex(pos){
        return Math.floor(pos/this.tileSize)
    }

    posToIndexRange(pos1, pos2){
        const posMax = Math.ceil(pos2/this.tileSize) * this.tileSize
        const range = [];
        while(pos1 < posMax){
            range.push(this.posToIndex(pos1));
            pos1 += this.tileSize;
        }
        return range;
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

    getByRange(xleft, xright, ybottom, ytop){
        const matches = [];
        this.posToIndexRange(xleft, xright).forEach(iX => {
            this.posToIndexRange(ybottom, ytop).forEach(iY=>{
                const match = this.getByIndex(iX, iY);
                if(match){
                    matches.push(match)
                }
            })
        })
        return matches;
    }

    matchPos(posX, posY){
       
        return this.getByIndex(this.posToIndex(posX), this.posToIndex(posY))
    }

}

export default PosConverter;