class Scene {
  constructor(height, width) {
    this.canvas = document.createElement("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.gameobjects = [];
    
    if(!arguments.length) {
      this.canvas.width = window.window.innerWidth;
      this.canvas.height = window.window.innerHeight;
    } else {
      this.canvas.width = width;
      this.canvas.height = height;
    }
  }

  render() {
    this.gameobjects.forEach(function(gameobject) {
      gameobject.render();
    });
  }

  clean() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  generateCanvas() {
    document.body.appendChild(this.canvas);
  }

  drawImage(x, y, height, width, src, rotation=0) {
    this.gameobjects[this.gameobjects.length] = 
      new Gameobject(x, y, height, width, src, rotation, this);
  }

  findGameobject(name) {
    return this.gameobjects.find(function(gameobject) {
      return gameobject;
    });
  }
}
