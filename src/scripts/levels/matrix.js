class Matrix{
    constructor(){
        this.table = [];
    }

    set(x,y,value){
        if(!this.table[x]){
            this.table[x] = [];
        }
        this.table[x][y] = value;
    }

    get(x,y){
        if(this.table[x]){
            return this.table[x][y]
        }else{
            return undefined;
        }

    }
}

window.Matrix = Matrix;

export default Matrix;