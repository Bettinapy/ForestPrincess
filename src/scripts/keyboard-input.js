class KeyboardInput{
    constructor(character){
        this.rightPressed = false;
        this.leftPressed = false;
        this.spacePressed = false;
        this.character = character;
        this.keyDownHandler = this.keyDownHandler.bind(this);
        this.keyUpHandler = this.keyUpHandler.bind(this);
    }

    keyDownHandler(event) {
        event.preventDefault();
        if (event.keyCode === 39) {
           
            this.character.run.dir = event.keyCode;
            this.rightPressed = true;
        }
        else if (event.keyCode === 37) {
            this.character.run.dir = -event.keyCode;
            this.leftPressed = true;
        }
        if (event.keyCode === 32) {
            // avoid jump stack
            if (this.character.jump.exactTime === 0 && Math.abs(this.character.vel.y) < 34){
                this.character.jump.start();
                this.spacePressed = true;
            }
        }
}

    keyUpHandler(event) {
        event.preventDefault();
        if (event.keyCode === 39) {
            this.character.run.dir = 0;
            this.rightPressed = false;
        }
        else if (event.keyCode === 37) {
            this.character.run.dir = 0;
            this.leftPressed = false;
        }
        if (event.keyCode === 32) {
            this.character.jump.stop();
            this.spacePressed = false;
        }
    }

    listenKeys(window){

        window.addEventListener('keydown', this.keyDownHandler);
        window.addEventListener('keyup', this.keyUpHandler);
    }
}

export default KeyboardInput;