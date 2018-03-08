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

  generateCanvas() {
    document.body.appendChild(this.canvas);
  }

  getCenter() {
    return [this.canvas.width / 2, this.canvas.height / 2]
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
