var s = new Scene();
var loop = new Thread();
var assets = {
  "character": "http://www.starbucks.com.pe/media/fresa-frappuccino-blended_tcm92-18638_w1024_n.png",
}

document.addEventListener('DOMContentLoaded', function() {
  s.init('game');
  s.drawImage('starbucks', assets.character, s,
    { x: .5, y: .5, anchorPoint: AnchorEnum.MIDDLE_CENTER, speed: .5 });
  Input.init();
  loop.start();
});

loop.render = function() {
  s.print();
};

loop.update = function() {
  sb = s.findGameobject('starbucks');
  if (Input.isPressed(Key.UP)) {
    sb.set({ y: sb.y() - sb.speed() * this.stats.delta_time });
  } else if (Input.isPressed(Key.DOWN)) {
    sb.set({ y: sb.y() + sb.speed() * this.stats.delta_time });
  }
  if (Input.isPressed(Key.RIGHT)) {
    sb.set({ x: sb.x() + sb.speed() * this.stats.delta_time });
  } else if (Input.isPressed(Key.LEFT)) {
    sb.set({ x: sb.x() - sb.speed() * this.stats.delta_time });
  }
};
