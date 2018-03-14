class Thread {
  constructor(interval=1000) {
    this.interval = interval;
    this.then = Date.now();
  }

  init() {
    var now = Date.now();
    var deltaTime = now - then;
    this.update(deltaTime / 1000);
    this.render();
    this.then = now;
  }
}
