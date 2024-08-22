class Shape {
 constructor(color, text, textColor) {
  this.color = color;
  this.text = text;
  this.textColor = textColor;
 }

 renderShape() {
  throw new Error("renderShape method should be implemented by subclass");
 }

 renderText() {
  return `<text x="150" y="120" font-size="30" text-anchor="middle" fill="${this.textColor}" font-family="Arial">${this.text}</text>`;
 }

 render() {
  return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${this.renderShape()}
        ${this.renderText()}
      </svg>
    `;
 }
}

class Circle extends Shape {
 constructor(color, text, textColor) {
  super(color, text, textColor);
 }

 renderShape() {
  return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
 }
}

class Square extends Shape {
 constructor(color, text, textColor) {
  super(color, text, textColor);
 }

 renderShape() {
  return `<rect x="70" y="20" width="160" height="160" fill="${this.color}" />`;
 }
}

class Triangle extends Shape {
 constructor(color, text, textColor) {
  super(color, text, textColor);
 }

 renderShape() {
  return `<polygon points="150,20 250,180 50,180" fill="${this.color}" />`;
 }
}

module.exports = {
 Circle,
 Square,
 Triangle,
};
