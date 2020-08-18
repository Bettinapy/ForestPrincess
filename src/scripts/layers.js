class Layer {
    constructor(){
        this.layers = [];
    }

    draw(context){
        this.layers.forEach(layer => {
            layer(context)
        })
    }
}

module.exports = Layer;