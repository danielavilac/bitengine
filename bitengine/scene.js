class Scene {
  constructor(canvasID) {
    this.canvas;
    this.ctx;
    this.gameobjects = [];
    var _initialized = false;
    if(arguments.length) this.init(canvasID)
  }

  init(canvasID) {
    this.canvas = document.getElementById(canvasID);
    if (this.canvas) {
      this.ctx = this.canvas.getContext("2d");
      this._initialized = true;
    } else {
      console.log('Unable to locate element with id  ' + canvasID);
    }
  }

  render() {
    if (!this._initialized) return
    this.gameobjects.forEach(function(gameobject) {
      gameobject.render();
    });
  }

  clean() {
    if (!this._initialized) return
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawImage(x, y, height, width, src, rotation=0) {
    if (!this._initialized) return
    this.gameobjects[this.gameobjects.length] = 
      new Gameobject(x, y, height, width, src, rotation, this);
  }

  findGameobject(name) {
    if (!this._initialized) return
    return this.gameobjects.find(function(gameobject) {
      return gameobject;
    });
  }
}
