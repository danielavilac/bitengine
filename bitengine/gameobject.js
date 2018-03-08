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
        this.options['x'] - this.width() / 2,
        this.options['y'] - this.height() / 2,
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
