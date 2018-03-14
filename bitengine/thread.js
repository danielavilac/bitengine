// class Thread {
//   constructor(interval=1000, requestAnimationFrame) {
//     this.interval = interval;
//     this.then = Date.now();
//     this.requestAnimationFrame = requestAnimationFrame;
//   }

//   update(f) {
//     this.requestAnimationFrame(f);
//   }

//   init() {
//     var now = Date.now();
//     var deltaTime = now - then;
//     this.update(deltaTime / 1000);
//     this.render();
//     this.then = now;
//   }
// }
