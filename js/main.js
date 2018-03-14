var s = new Scene();
var then = Date.now();
var w = window;
var assets = {
  "character": "http://www.starbucks.com.pe/media/fresa-frappuccino-blended_tcm92-18638_w1024_n.png",
}
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

document.addEventListener('DOMContentLoaded', function() {
  s.init('game');
  s.drawImage('starbucks', assets['character'], s,
    { x: .5, y: .5, anchorPoint: AnchorEnum.MIDDLE_CENTER, speed: .5 });
  Input.init();
  main();
});

function main () {
  var now = Date.now();
  var deltaTime = now - then;
  update(deltaTime / 1000);
  render();
  then = now;
  requestAnimationFrame(main);
}

function update(deltaTime) {
  sb = s.findGameobject('starbucks');
  if (Input.isPressed(Key.UP)) {
    sb.set({ y: sb.y() - sb.speed() * deltaTime });
  } else if (Input.isPressed(Key.DOWN)) {
    sb.set({ y: sb.y() + sb.speed() * deltaTime });
  }
  if (Input.isPressed(Key.RIGHT)) {
    sb.set({ x: sb.x() + sb.speed() * deltaTime });
  } else if (Input.isPressed(Key.LEFT)) {
    sb.set({ x: sb.x() - sb.speed() * deltaTime });
  }
}

function render() {
  s.clean();
  s.render();
}
