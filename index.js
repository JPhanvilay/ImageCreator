const inquirer = require("inquirer");
const Shape = require("./lib/shape");

inquirer.prompt([
        {
            type: "input",
            name: "characters",
            message: "What text would you like to enter? (3 Characters Maximum)",
            validate: function(answer){
                if(answer.length > 3){
                    return false;
                }
                return true;
            }
        },
        {
            type: "input",
            name: "textcolor",
            message: "What color do you want to make the text? (Must be a valid color or a hexadecimal",
        },
        {
            type: "list",
            name: "shape",
            message: "What shape should the logo be?",
            choices: ["Triange", "Square", "Circle"]
        },
        {
            type: "input",
            name: "shapecolor",
            message: "What color should the shape be?",
        }
    ]
)

.then((answers) => {
    console.log(answers);
})