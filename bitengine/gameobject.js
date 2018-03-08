var AnchorEnum = {
  TOP_LEFT: [0,0],
  TOP_CENTER: [0,1],
  TOP_RIGHT: [0,2],
  MIDDLE_LEFT: [1,0],
  MIDDLE_CENTER: [1,1],
  MIDDLE_RIGHTL: [1,2],
  BOTTOM_LEFT: [2,0],
  BOTTOM_CENTER: [2,1],
  BOTTOM_RIGHT: [2,2],
};

class Gameobject {
  constructor(name, src, scene, options) {
    this.name = name;
    this.src = src;
    this.scene = scene;
    this.image = new Image();
    this.image.src = this.src;
    this.options = {
      x: 0,
      y: 0,
      width: null,
      height: null,
      rotation: 0,
      anchorPoint: AnchorEnum.MIDDLE_CENTER,
    }
    Object.assign(this.options, options);
    this.image.onload = this.loadimage.bind(this);
  }

  loadimage() {
      this.scene.ctx.save();
      this.scene.ctx.translate(
        this.scene.canvas.width * this.options['x'],
        this.scene.canvas.height * this.options['y']);
      console.log(this.options['rotation']);
      this.scene.ctx.rotate(this.options['rotation'] * Math.PI / 180);
      this.scene.ctx.drawImage(
        this.image,
        this.options['x'] - (this.width() / 2) * this.options.anchorPoint[0],
        this.options['y'] - (this.height() / 2) * this.options.anchorPoint[1],
        this.width(),
        this.height());
      this.scene.ctx.restore();
  }

  width() {
    return this.options['width'] || this.image.width;
  }

  height() {
    return this.options['height'] || this.image.height;
  }
}
