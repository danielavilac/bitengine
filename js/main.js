var s = new Scene();

document.addEventListener('DOMContentLoaded', function() {
  s.generateCanvas();
  var url = "http://www.starbucks.com.pe/media/fresa-frappuccino-blended_tcm92-18638_w1024_n.png";
  s.drawImage('control', url, s, { x: .0, y: .0, anchorPoint: AnchorEnum.TOP_LEFT });
});
