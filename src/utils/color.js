class Color {
  constructor(color, options) {
    if (color instanceof Object) {
      this._r = color.r;
      this._g = color.g;
      this._b = color.b;
    } else {
      const decodedColor = this.decodeColor(color);
      this._r = decodedColor.r;
      this._g = decodedColor.g;
      this._b = decodedColor.b;
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
      };
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
      r: this._r,
      g: this._g,
      b: this._b,
    };
  }

  // todo
  getHsl() {
    const r = this._r / 255;
    const g = this._g / 255;
    const b = this._b / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const average = (max + min) / 2;
    let h,
      s,
      l = average;
    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - 2 * average) : d / (2 * average);
      switch (max) {
        case r:
          h = ((g - b) / d) * 60 + (g < b ? 360 : 0);
          break;
        case g:
          h = ((b - r) / d) * 60 + 120;
          break;
        case b:
          h = ((r - g) / d) * 60 + 240;
          break;
      }
    }
    return { h, s, l };
  }

  componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  toHex() {
    return (
      '#' +
      this.componentToHex(this._r) +
      this.componentToHex(this._g) +
      this.componentToHex(this._b)
    );
  }

  toRgb() {
    return `rgb(${this._r},${this._g},${this._b})`;
  }

  // todo
  toHsl() {
    return this._getHsl();
  }

  tint(color, percentage) {
    return this.mix(new Color('#fff'), color, percentage);
  }

  shade(color, percentage) {
    return this.mix(color, new Color('#000'), percentage);
  }

  mix(originColor, targetColor, percentage) {
    let r = (targetColor._r - originColor._r) * (percentage / 100);
    let g = (targetColor._g - originColor._g) * (percentage / 100);
    let b = (targetColor._b - originColor._b) * (percentage / 100);
    r = Math.floor(r) + originColor._r;
    g = Math.floor(g) + originColor._g;
    b = Math.floor(b) + originColor._b;
    return new Color({ r, g, b });
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
