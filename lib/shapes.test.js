const { Circle, Square, Triangle } = require("./shape");

describe("Shapes Library", () => {
 const text = "ABC";
 const textColor = "#ffffff";

 test("Circle should generate correct SVG element with text", () => {
  const color = "#ff5733";
  const circle = new Circle(color, text, textColor);
  const expectedShape = `<circle cx="150" cy="100" r="80" fill="${color}" />`;
  const expectedText = `<text x="150" y="120" font-size="30" text-anchor="middle" fill="${textColor}" font-family="Arial">${text}</text>`;
  const expectedSVG = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${expectedShape}
        ${expectedText}
      </svg>
    `.trim();
  expect(circle.render().trim()).toBe(expectedSVG);
 });

 test("Square should generate correct SVG element with text", () => {
  const color = "#33aaff";
  const square = new Square(color, text, textColor);
  const expectedShape = `<rect x="70" y="20" width="160" height="160" fill="${color}" />`;
  const expectedText = `<text x="150" y="120" font-size="30" text-anchor="middle" fill="${textColor}" font-family="Arial">${text}</text>`;
  const expectedSVG = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${expectedShape}
        ${expectedText}
      </svg>
    `.trim();
  expect(square.render().trim()).toBe(expectedSVG);
 });

 test("Triangle should generate correct SVG element with text", () => {
  const color = "#33ffaa";
  const triangle = new Triangle(color, text, textColor);
  const expectedShape = `<polygon points="150,20 250,180 50,180" fill="${color}" />`;
  const expectedText = `<text x="150" y="120" font-size="30" text-anchor="middle" fill="${textColor}" font-family="Arial">${text}</text>`;
  const expectedSVG = `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${expectedShape}
        ${expectedText}
      </svg>
    `.trim();
  expect(triangle.render().trim()).toBe(expectedSVG);
 });
});
