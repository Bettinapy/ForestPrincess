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
            debugger
            this.character.run.dir = 1;
            this.rightPressed = true;
        }
        else if (event.keyCode === 37) {
            this.leftPressed = true;
        }
        if (event.keyCode === 32) {
            debugger
            this.character.jump.start();
            this.spacePressed = true;
        }
}

    keyUpHandler(event) {
        event.preventDefault();
        if (event.keyCode === 39) {
            this.rightPressed = false;
        }
        else if (event.keyCode === 37) {
            this.leftPressed = false;
        }
        if (event.keyCode === 32) {
            this.character.jump.stop();
            this.spacePressed = false;
        }
    }

    listenKeys(window){
        console.log('listen')
        window.addEventListener('keydown', this.keyDownHandler);
        window.addEventListener('keyup', this.keyUpHandler);
    }
}

export default KeyboardInput;