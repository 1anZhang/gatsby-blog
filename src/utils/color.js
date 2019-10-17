class Color {
  constructor(r, g, b) {
    if (g) {
      this.r = r;
      this.g = g;
      this.b = b;
    } else {
      const color = this.decodeColor(r);
      this.r = color.r;
      this.g = color.g;
      this.b = color.b;
    }
  }

  decodeColor(c) {
    const rgbReg = /^rgb\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\s*\)$/;
    if (c.startsWith('#')) {
      if (c.length !== 4 && c.length !== 7) {
        throw new TypeError('unknown color type');
      }
      let r, g, b;
      if (c.length === 4) {
        r = c.slice(1, 2).repeat(2);
        g = c.slice(2, 3).repeat(2);
        b = c.slice(3, 4).repeat(2);
      }
      if (c.length === 7) {
        r = c.slice(1, 3);
        g = c.slice(3, 5);
        b = c.slice(5, 7);
      }
      return {
        r: this.hexToDec(r),
        g: this.hexToDec(g),
        b: this.hexToDec(b),
      }
    } else if (rgbReg.test(c)) {
      let colorResult = rgbReg.exec(c);
      if (
        0 > colorResult[1] ||
        colorResult[1] > 255 ||
        0 > colorResult[2] ||
        colorResult[2] > 255 ||
        0 > colorResult[3] ||
        colorResult[3] > 255
      ) {
        throw new TypeError('颜色格式错误');
      }
      return {
        r: parseInt(colorResult[1]),
        g: parseInt(colorResult[2]),
        b: parseInt(colorResult[3]),
      };
    } else {
      throw new TypeError('暂不支持的颜色类型');
    }
  }

  hexToDec(c) {
    return parseInt(c, 16);
  }

  getColor() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
    };
  }

  componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
  }

  toHex() {
    return (
      '#' +
      this.componentToHex(this.r) +
      this.componentToHex(this.g) +
      this.componentToHex(this.b)
    );
  }

  toRgb() {
    return `rgb(${this.r},${this.g},${this.b})`;
  }

  tint(color, percentage) {
    return this.mix(new Color('#fff'), color, percentage);
  }

  shade(color, percentage) {
    return this.mix(color, new Color('#000'), percentage);
  }

  mix(originColor, targetColor, percentage) {
    let r = (targetColor.r - originColor.r) * (percentage / 100);
    let g = (targetColor.g - originColor.g) * (percentage / 100);
    let b = (targetColor.b - originColor.b) * (percentage / 100);
    r = Math.floor(r) + originColor.r;
    g = Math.floor(g) + originColor.g;
    b = Math.floor(b) + originColor.b;
    return new Color(r, g, b);
  }

  getHoverColor() {
    return this.tint(this, 20).toHex();
  }

  getActiveColor() {
    return this.shade(this, 5).toHex();
  }

  getColorGradeList() {
    return [
      this.tint(this, 20).toHex(),
      this.tint(this, 40).toHex(),
      this.tint(this, 60).toHex(),
      this.tint(this, 80).toHex(),
      this.toHex(),
      this.shade(this, 20).toHex(),
      this.shade(this, 40).toHex(),
      this.shade(this, 60).toHex(),
      this.shade(this, 80).toHex(),
    ];
  }
}

export default Color;
