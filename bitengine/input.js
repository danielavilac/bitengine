class Input {
  static init() {
    addEventListener("keydown", function (e) {
      keysDown[e.keyCode] = true;
      console.log(KeyName[e.keyCode] + " key pressed");
    }, false);

    addEventListener("keyup", function (e) {
      delete keysDown[e.keyCode];
    }, false);
  }

  static map() {
    return keysDown
  }

  static isPressed(keyName) {
    return keyName in keysDown;
  }
}
