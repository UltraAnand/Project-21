function isRectangleTouching(r1, r2) {

    if(abs(r1.x - r2.x) <= (r1.width + r2.width) / 2 ||
      (r1.x > r2.x)) {
      return true;
    } else {
      return false;
    }
  }