import "./styles/index.scss";
import './scripts/loaders';
import Game from './scripts/game';

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementsByTagName("canvas")[0];
  const ctx = canvas.getContext("2d", { alpha: false });
  const offsetLeft = canvas.offsetLeft;
  const offsetTop = canvas.offsetTop;

  const game = new Game(ctx, canvas);
  game.showMainPage();
  // keyboard input to start the game: press 'r'
  window.addEventListener('keydown', function(event){
    event.preventDefault();
    if(event.keyCode === 82){
      game.start()
    }

  })



});