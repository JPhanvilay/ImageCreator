const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shape");

// Function to generate the SVG logo
function generateSVGLogo({ text, color, shape, textColor }) {
 let shapeInstance;

 // Switch case to select the appropriate shape class based on user input
 switch (shape) {
  case "circle":
   shapeInstance = new Circle(color, text, textColor);
   break;
  case "square":
   shapeInstance = new Square(color, text, textColor);
   break;
  case "triangle":
   shapeInstance = new Triangle(color, text, textColor);
   break;
  default:
   console.error("Invalid shape selected.");
   process.exit(1);
 }

 // Render the shape as SVG
 return shapeInstance.render();
}

// Function to save the generated SVG to a file
function saveSVG(svgContent) {
 fs.writeFileSync("logo.svg", svgContent);
 console.log(`Generated logo.svg`);
}

// Main function to handle user input and generate the logo
async function main() {
 // Prompt the user with questions using inquirer
 const answers = await inquirer.prompt([
  {
   type: "input",
   name: "text",
   message: "Enter the text for the logo (max 3 characters):",
   validate: function (input) {
    if (input.length > 3) {
     return "Text can be up to 3 characters.";
    }
    return true;
   },
  },
  {
   type: "input",
   name: "color",
   message: "Enter the color for the shape (e.g., #ff5733):",
  },
  {
   type: "input",
   name: "textColor",
   message: "Enter the color for the text (e.g., #ffffff):",
  },
  {
   type: "list",
   name: "shape",
   message: "Choose the shape for the logo:",
   choices: ["circle", "square", "triangle"],
  },
 ]);

 // Generate the SVG logo based on user input
 const svgContent = generateSVGLogo(answers);

 // Save the SVG to a file
 saveSVG(svgContent);
}

// Call the main function to start the process
main();
