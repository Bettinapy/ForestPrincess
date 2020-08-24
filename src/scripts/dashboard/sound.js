class Sound{
    constructor(src){
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
    }
    
    loop(){
        this.sound.loop = true;
    }

    setVolumne(num){
        this.sound.volume = num;
    }

    play(){
        this.sound.play();
    }

    pause(){
        this.sound.pause();
    }

}

export default Sound;