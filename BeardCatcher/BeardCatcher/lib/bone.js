const FallingObject = require("./falling_object");

class Bone extends FallingObject {
  constructor(options = {}) {
    options.good = true;
    options.src = "https://res.cloudinary.com/dufw1byqv/image/upload/v1607614894/samples/beard_h2d5rz.jpg";
    super(options);
  }
}


