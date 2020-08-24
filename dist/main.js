!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);function r(e){return new Promise((function(t){var n=new Image;n.addEventListener("load",(function(){t(n)})),n.src=e}))}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sound=document.createElement("audio"),this.sound.src=t,this.sound.setAttribute("preload","auto"),this.sound.setAttribute("controls","none"),this.sound.style.display="none",document.body.appendChild(this.sound)}var t,n,r;return t=e,(n=[{key:"loop",value:function(){this.sound.loop=!0}},{key:"setVolumne",value:function(e){this.sound.volume=e}},{key:"play",value:function(){this.sound.play()}},{key:"pause",value:function(){this.sound.pause()}}])&&i(t.prototype,n),r&&i(t,r),e}();function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:30;o(this,e),this.matrix=t,this.tileSize=n}var t,n,r;return t=e,(n=[{key:"posToIndex",value:function(e){return Math.floor(e/this.tileSize)}},{key:"posToIndexRange",value:function(e,t){for(var n=Math.ceil(t/this.tileSize)*this.tileSize,r=[];e<n;)r.push(this.posToIndex(e)),e+=this.tileSize;return r}},{key:"getByIndex",value:function(e,t){var n=this.matrix.get(e,t),r=t*this.tileSize,i=r+this.tileSize,a=e*this.tileSize,o=a+this.tileSize;if(n)return{tile:n,ytop:r,ybottom:i,xleft:a,xright:o}}},{key:"getByRange",value:function(e,t,n,r){var i=this,a=[];return this.posToIndexRange(e,t).forEach((function(e){i.posToIndexRange(n,r).forEach((function(t){var n=i.getByIndex(e,t);n&&a.push(n)}))})),a}},{key:"matchPos",value:function(e,t){return this.getByIndex(this.posToIndex(e),this.posToIndex(t))}}])&&s(t.prototype,n),r&&s(t,r),e}();function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){var n=new u(t),r=document.createElement("canvas");r.height=390,r.width=1200;var i=r.getContext("2d");return function(a,o){var s=n.posToIndex(o.size.x),u=n.posToIndex(o.pos.x);!function(n,a){i.clearRect(0,0,r.width,r.height);for(var o=function(r){var a=t.table[r];a&&a.forEach((function(t,a){e.drawTile(t.name,i,r-n,a)}))},s=n;s<=a;s++)o(s)}(u,s+u),a.drawImage(r,Math.floor(-o.pos.x%30),Math.floor(-o.pos.y))}}function f(e){var t=document.createElement("canvas");t.height=390,t.width=650;var n=t.getContext("2d");return function(r){n.clearRect(0,0,t.width,t.height),e.draw("mainBg",n,0,0,2,2),r.drawImage(t,0,0)}}function v(e){var t=document.createElement("canvas");t.height=60,t.width=60;var n=t.getContext("2d");return function(r,i){n.clearRect(0,0,60,60),e.draw(n),r.drawImage(t,e.pos.x-i.pos.x,e.pos.y-i.pos.y)}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.image=t,this.width=n,this.height=r,this.tiles=new Map}var t,n,r;return t=e,(n=[{key:"create",value:function(e,t,n,r,i){var a=this,o=[!1,!0].map((function(e){r||(r=a.width),i||(i=a.height);var o=document.createElement("canvas");o.height=i,o.width=r;var s=o.getContext("2d");return e&&(s.scale(-1,1),s.translate(-15,0)),s.drawImage(a.image,t,n,r,i,0,0,r,i),o}));this.tiles.set(e,o)}},{key:"draw",value:function(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=arguments.length>6&&void 0!==arguments[6]&&arguments[6],s=this.tiles.get(e)[o?1:0];t.drawImage(s,n,r,this.width*i,this.height*a)}},{key:"drawTile",value:function(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=arguments.length>6&&void 0!==arguments[6]&&arguments[6],s=this.tiles.get(e)[o?1:0];t.drawImage(s,n*this.width,r*this.height,this.width*i,this.height*a)}}])&&d(t.prototype,n),r&&d(t,r),e}();function p(){return r("src/images/main-bg.png").then((function(e){var t=new y(e,600,450);return t.create("mainBg",0,0),t}))}function m(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var w=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.table=[]}var t,n,r;return t=e,(n=[{key:"set",value:function(e,t,n){this.table[e]||(this.table[e]=[]),this.table[e][t]=n}},{key:"get",value:function(e,t){return this.table[e]?this.table[e][t]:void 0}}])&&m(t.prototype,n),r&&m(t,r),e}();window.Matrix=w;var g=w;function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var k=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tiles=new u(t)}var t,n,r;return t=e,(n=[{key:"checkCollisionY",value:function(e){var t;if(e.vel.y>0)t=e.pos.y+e.size.y;else{if(!(e.vel.y<0))return;t=e.pos.y}this.tiles.getByRange(e.pos.x,e.pos.x+e.size.x,t,t).forEach((function(t){"flatGround"!==t.tile.name&&"ground"!==t.tile.name&&"greenGrass"!==t.tile.name||(e.vel.y>0?e.pos.y+e.size.y>=t.ytop&&(e.pos.y=t.ytop-e.size.y,e.vel.y=0):e.vel.y<0&&e.pos.y<t.ybottom&&(e.pos.y=t.ybottom,e.vel.y=0))}))}},{key:"checkCollisionX",value:function(e){var t;if(e.vel.x>0)t=e.pos.x+e.size.x;else{if(!(e.vel.x<0))return;t=e.pos.x}this.tiles.getByRange(t,t,e.pos.y,e.pos.y+e.size.y).forEach((function(t){"flatGround"!==t.tile.name&&"ground"!==t.tile.name&&"greenGrass"!==t.tile.name||(e.vel.x>0?e.pos.x+e.size.x>t.xleft&&(e.pos.x=t.xleft-e.size.x,e.vel.x=0,e.walk&&(e.walk.enemyDir=-1,e.walk.distance=0)):e.vel.x<0&&e.pos.x<t.xright&&(e.pos.x=t.xright,e.vel.x=0,e.walk&&(e.walk.enemyDir=1,e.walk.distance=0)))}))}}])&&b(t.prototype,n),r&&b(t,r),e}();function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var T=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.characters=t,this.sound=new a("src/audios/collision.wav")}var t,n,r;return t=e,(n=[{key:"check",value:function(e){var t=this,n=!1;return this.characters.forEach((function(r){r!==e?r.boundaries.isCollide(e.boundaries)&&(console.log("Collide! GAME OVER"),t.sound.play(),n=!0):n=!1})),n}}])&&x(t.prototype,n),r&&x(t,r),e}();function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.sound=new a("src/audios/drop.wav")}var t,n,r;return t=e,(n=[{key:"check",value:function(e){return e.pos.y+e.size.y>350&&(console.log("Drop! Game Over!"),this.sound.play(),!0)}}])&&E(t.prototype,n),r&&E(t,r),e}();function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var j=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.layers=[],this.tiles=new g,this.characters=new Set,this.charactersCollider=new T(this.characters),this.tileCollider=new k(this.tiles),this.characterDrop=new C,this.gameOver=!1}var t,n,r;return t=e,(n=[{key:"draw",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.layers.forEach((function(n){n(e,t)}))}},{key:"update",value:function(e,t){var n=this;this.characters.forEach((function(t){if(t.jump&&(t.jump.update(t,e),t.run.update(t,e),t.player.update(e)),t.walk&&t.walk.update(t,e),t.pos.x+=t.vel.x*e,n.tileCollider.checkCollisionX(t),t.pos.y+=t.vel.y*e,n.tileCollider.checkCollisionY(t),t.vel.y+=2e3*e,t.jump&&n.characterDrop.check(t))return t.player.reset(),void(n.gameOver=!0)})),this.characters.forEach((function(e){n.charactersCollider.check(e)&&(e.player.reset(),n.gameOver=!0)}))}}])&&O(t.prototype,n),r&&O(t,r),e}();function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.setVector(t,n)}var t,n,r;return t=e,(n=[{key:"setVector",value:function(e,t){this.x=e,this.y=t}}])&&S(t.prototype,n),r&&S(t,r),e}();function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var M=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pos=t,this.size=n}var t,n,r;return t=e,(n=[{key:"isCollide",value:function(e){return this.getBottom()>e.getTop()&&this.getTop()<e.getBottom()&&this.getLeft()<e.getRight()&&this.getRight()>e.getLeft()}},{key:"getBottom",value:function(){return this.pos.y+this.size.y}},{key:"getTop",value:function(){return this.pos.y}},{key:"getLeft",value:function(){return this.pos.x}},{key:"getRight",value:function(){return this.pos.x+this.size.x}}])&&I(t.prototype,n),r&&I(t,r),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pos=new P(0,0),this.vel=new P(0,0),this.size=new P(0,0),this.boundaries=new M(this.pos,this.size)}var t,n,r;return t=e,(n=[{key:"update",value:function(e){this.pos.x+=this.vel.x*e,this.pos.y+=this.vel.y*e*1.8}}])&&A(t.prototype,n),r&&A(t,r),e}();function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.duration=.1,this.exactTime=0,this.velocityY=500,this.velocityX=20,this.sound=new a("src/audios/jump.wav"),this.sound.setVolumne(.3)}var t,n,r;return t=e,(n=[{key:"start",value:function(){this.exactTime=this.duration,this.sound.play()}},{key:"stop",value:function(){this.exactTime=0}},{key:"update",value:function(e,t){this.exactTime>0&&(e.vel.y=-this.velocityY,this.exactTime-=t)}}])&&z(t.prototype,n),r&&z(t,r),e}();function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.speed=300,this.dir=0,this.distance=0}var t,n,r;return t=e,(n=[{key:"update",value:function(e,t){e.vel.x=this.speed*this.dir*t,this.dir?this.distance+=Math.abs(e.vel.x*t):this.distance=0}}])&&D(t.prototype,n),r&&D(t,r),e}();function R(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var G=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;R(this,e),this.time=t,this.timerBuffer=document.createElement("canvas"),this.timerBuffer.height=390,this.timerBuffer.width=600,this.timerBufferContext=this.timerBuffer.getContext("2d"),this.timerBufferContext.font="30px VT323",this.timerBufferContext.fillStyle="white"}var t,n,r;return t=e,(n=[{key:"updateTime",value:function(e){this.time+=e}},{key:"resetTime",value:function(){this.time=0}},{key:"draw",value:function(e,t,n){this.timerBufferContext.clearRect(0,0,600,390),this.timerBufferContext.fillText("Time: ".concat(Math.round(this.time)),t,n),e.drawImage(this.timerBuffer,0,0)}}])&&V(t.prototype,n),r&&V(t,r),e}();function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var q=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.score=0,this.timer=new G}var t,n,r;return t=e,(n=[{key:"update",value:function(e){this.timer.updateTime(e)}},{key:"reset",value:function(){this.timer.resetTime()}}])&&U(t.prototype,n),r&&U(t,r),e}();function Y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function X(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.speed=4e3,this.enemyDir=-1,this.distance=0}var t,n,r;return t=e,(n=[{key:"update",value:function(e,t){e.vel.x=this.speed*this.enemyDir*t,this.distance+=Math.abs(e.vel.x*t)}}])&&X(t.prototype,n),r&&X(t,r),e}();function $(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return K(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return K(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function K(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function N(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Q=function(){function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1/60;N(this,e);var r,i=0;this.requestId=void 0,this.gameOver=!1,this.updateTime=function(e){for(void 0===r&&(r=e),i+=(e-r)/1e3;i>n;)"Game Over"===t.update(n)&&(t.gameOver=!0),i-=n;r=e,t.gameOver?(i=0,cancelAnimationFrame(t.requestId),r=void 0,t.requestId=void 0):t.start()}}var t,n,r;return t=e,(n=[{key:"start",value:function(){this.requestId=requestAnimationFrame(this.updateTime)}},{key:"stop",value:function(){cancelAnimationFrame(this.requestId)}}])&&J(t.prototype,n),r&&J(t,r),e}();function W(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var Z=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.rightPressed=!1,this.leftPressed=!1,this.spacePressed=!1,this.character=t,this.keyDownHandler=this.keyDownHandler.bind(this),this.keyUpHandler=this.keyUpHandler.bind(this)}var t,n,r;return t=e,(n=[{key:"keyDownHandler",value:function(e){e.preventDefault(),39===e.keyCode?(this.character.run.dir=e.keyCode,this.rightPressed=!0):37===e.keyCode&&(this.character.run.dir=-e.keyCode,this.leftPressed=!0),32===e.keyCode&&0===this.character.jump.exactTime&&Math.abs(this.character.vel.y)<34&&(this.character.jump.start(),this.spacePressed=!0)}},{key:"keyUpHandler",value:function(e){e.preventDefault(),39===e.keyCode?(this.character.run.dir=0,this.rightPressed=!1):37===e.keyCode&&(this.character.run.dir=0,this.leftPressed=!1),32===e.keyCode&&(this.character.jump.stop(),this.spacePressed=!1)}},{key:"listenKeys",value:function(e){e.addEventListener("keydown",this.keyDownHandler),e.addEventListener("keyup",this.keyUpHandler)}}])&&W(t.prototype,n),r&&W(t,r),e}();var ee=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.pos=new P(0,0),this.size=new P(600,390)};function te(e,t,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:45,a=document.createElement("canvas");a.height=390,a.width=600;var o=a.getContext("2d");return o.font=i+"px "+r,o.fillStyle="white",o.textAlign="center",function(r){o.clearRect(0,0,600,390),o.fillText(e,t,n),r.drawImage(a,0,0)}}function ne(e){var t=document.createElement("canvas");t.height=390,t.width=600;var n=t.getContext("2d");n.measureText(e.text);n.font="25px VT323";var r=e.x+e.width/2-25,i=e.y+e.height/2+25/3;return n.beginPath(),n.moveTo(e.x+3,e.y),n.arcTo(e.x+e.width,e.y,e.x+e.width,e.y+e.height,3),n.arcTo(e.x+e.width,e.y+e.height,e.x,e.y+e.height,3),n.arcTo(e.x,e.y+e.height,e.x,e.y,3),n.arcTo(e.x,e.y,e.x+e.width,e.y,3),n.strokeStyle="white",n.stroke(),function(a,o){n.clearRect(0,0,t.height,t.width),e.hovered?n.fillStyle="#57AF55":n.fillStyle="green",n.fill(),n.fillStyle="white",n.fillText(e.text,r,i),a.drawImage(t,0,0)}}function re(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ie=function(){function e(t,n,r,i,a,o){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.x=n,this.y=r,this.width=i,this.height=a,this.clicked=!1,this.hovered=!1,this.text=t,this.canvas=o,this.offsetLeft=this.canvas.offsetLeft,this.offsetTop=this.canvas.offsetTop,this.hoverHandler=this.hoverHandler.bind(this),this.clickHandler=this.clickHandler.bind(this),this.buttonLayer=ne(this)}var t,n,r;return t=e,(n=[{key:"getMousePos",value:function(e){return{x:e.clientX-this.offsetLeft,y:e.clientY-this.offsetTop}}},{key:"hoverHandler",value:function(e,t){e.preventDefault();var n=e.clientX-this.offsetLeft,r=e.clientY-this.offsetTop;n>this.x&&n<this.x+this.width&&r>this.y&&r<this.y+this.height?this.hovered=!0:this.hovered=!1,this.buttonLayer(t)}},{key:"clickHandler",value:function(e,t){e.preventDefault();var n=e.clientX-this.offsetLeft,r=e.clientY-this.offsetTop,i=this.clicked;n>this.x&&n<this.x+this.width&&r>this.y&&r<this.y+this.height?(t.clearRect(0,0,600,390),i||(this.clicked=!0,console.log("Start Game!"),this.handler())):this.clicked=!1}}])&&re(t.prototype,n),r&&re(t,r),e}();function ae(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,i=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){i=!0,a=e}finally{try{r||null==s.return||s.return()}finally{if(i)throw a}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return oe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return oe(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function oe(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function se(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var ue=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.startMusic=new a("src/audios/background.ogg"),this.gameOverMusic=new a("src/audios/game-over.mp3"),this.buttonMusic=new a("src/audios/button.ogg"),this.playerMusic=new a("src/audios/player-music.mp3"),this.ctx=t,this.canvas=n,this.offsetLeft=this.canvas.offsetLeft,this.offsetTop=this.canvas.offsetTop,this.start=this.start.bind(this),this.gameOverView=this.gameOverView.bind(this),this.buttons=new Set,this.bgs=[]}var t,n,i;return t=e,(n=[{key:"showMainPage",value:function(){var e=this;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),Promise.all([p()]).then((function(t){var n=ae(t,1)[0],r=new j;r.layers.push(f(n)),r.layers.push(te("Forest",300,100,"Bungee Shade")),r.layers.push(te("Princess",300,150,"Bungee Shade")),r.layers.push(te("-- Press SPACE to jump --",300,290,"VT323",20)),r.layers.push(te("-- Press -> to move --",300,310,"VT323",20));var i=e.ctx,a=e;e.startMusic.loop();var o=new ie("start",260,220,80,30,e.canvas,e.ctx,a);function s(e){e.preventDefault(),o.hoverHandler(e,i)}function u(e){e.preventDefault(),o.clickHandler(e,i)}window.addEventListener("mousemove",s,!0),window.addEventListener("click",u,!0),o.handler=function(){window.removeEventListener("mousemove",s,!0),window.removeEventListener("click",u,!0),r.layers=[],a.buttonMusic.play(),a.start()},r.layers.push(ne(o)),r.draw(i)}))}},{key:"start",value:function(){var e,t=this;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.startMusic.pause(),Promise.all([p(),r("src/images/jungle_tileset.png").then((function(e){var t=new y(e,30,30);return t.create("flatGround",70,225),t.create("ground",354,210),t.create("greenGrass",161,33),t.create("obstacleGrass",64,34,80,60),t})),(e="level-1",fetch("src/scripts/levels/".concat(e,".json")).then((function(e){return e.clone().json()}))),Promise.all([r("src/images/princess/Idle.png").then((function(e){var t=new y(e,30,30);return t.create("idle-1",24,11),t.create("idle-2",24,59),t.create("idle-3",24,303),t})),r("src/images/princess/Run.png").then((function(e){var t=new y(e,30,30);return t.create("run-1",24,11),t.create("run-2",24,59),t.create("run-3",24,153),t}))]).then((function(e){var t=Y(e,2),n=t[0],r=t[1],i=new L;i.size.setVector(60,60),i.jump=new B,i.run=new H,i.player=new q;var a=["run-1","run-2","run-3"];return i.draw=function(e){var t=Math.floor(i.run.distance/10)%a.length;0!==i.run.dir?r.draw(a[t],e,0,0,3,3,i.run.dir<0):n.draw("idle-1",e,0,0,3,3)},i})),Promise.all([r("src/images/enemies/walk.png").then((function(e){var t=new y(e,20,20);return t.create("walk-1",29,14),t.create("walk-2",29,60),t.create("walk-3",29,109),t}))]).then((function(e){var t=$(e,1)[0],n=new L;n.size.setVector(45,55),n.walk=new F;var r=["walk-1","walk-2","walk-3"];return n.draw=function(e){var i=Math.floor(n.walk.distance/10)%r.length;t.draw(r[i],e,0,0,3,3,n.walk.enemyDir<0)},n}))]).then((function(e){var n=ae(e,5),r=n[0],i=n[1],a=n[2],o=n[3],s=n[4],u=o.player;s.pos.setVector(600,0);var l,d,y=new j;l=a.backgrounds,d=y.tiles,l.forEach((function(e){e.ranges.forEach((function(t){for(var n=c(t,4),r=n[0],i=n[1],a=n[2],o=n[3],s=r;s<i;s++)for(var u=a;u<o;u++)d.set(s,u,{name:e.tile})}))})),y.layers.push(f(r)),y.layers.push(h(i,y.tiles)),y.layers.push(v(o)),y.layers.push(v(s)),y.layers.push(function(e){return function(t,n){e.timer.draw(t,450,50)}}(u)),y.characters.add(o),y.characters.add(s);var p=new ee;new Z(o).listenKeys(window),t.playerMusic.setVolumne(.8),t.playerMusic.loop(),t.playerMusic.play();var m=t,w=t.ctx,g=(t.canvas,new Q(1/60));g.update=function(e){if(y.gameOver)return y.layers=null,y.characters=null,o.player.reset(),o.player.timer.resetTime(),m.gameOverView(),"Game Over";y.update(e,p),o.pos.x>100&&(p.pos.x=o.pos.x-100),y.draw(w,p)},g.start()}))}},{key:"gameOverView",value:function(){this.playerMusic.pause(),this.gameOverMusic.play();var e=new j;e.layers.push(te("Game Over",300,100,"VT323"));var t=this,n=this.ctx,r=new ie("start",260,220,80,30,this.canvas),i=new ie("quit",260,260,80,30,this.canvas);function a(e){e.preventDefault(),r.hoverHandler(e,n),i.hoverHandler(e,n)}function o(e){e.preventDefault(),r.clickHandler(e,n),i.clickHandler(e,n)}window.addEventListener("mousemove",a,!0),window.addEventListener("click",o,!0),r.handler=function(){window.removeEventListener("mousemove",a,!0),window.removeEventListener("click",o,!0),e.layers=[],t.buttonMusic.play(),t.start()},i.handler=function(){return window.removeEventListener("mousemove",a,!0),window.removeEventListener("click",o,!0),e.layers=[],t.buttonMusic.play(),t.showMainPage()},e.layers.push(ne(r)),e.layers.push(ne(i)),e.draw(n)}}])&&se(t.prototype,n),i&&se(t,i),e}();document.addEventListener("DOMContentLoaded",(function(){var e=document.getElementsByTagName("canvas")[0],t=e.getContext("2d",{alpha:!1});e.offsetLeft,e.offsetTop;new ue(t,e).showMainPage()}))}]);
//# sourceMappingURL=main.js.map