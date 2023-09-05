const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { Triangle, Circle, Square } = require('./shapes.js');
const SVG = require('./svg.js');

class CLI {
    run() {
        return inquirer.prompt([
            {
                type: 'input',
                message: 'Enter 3 letters:',
                name: 'logo'
            },
            {
                type: 'input',
                message: 'Please type what color of text you would like.',
                name: 'color'
            },
            {
                type: 'list',
                message: 'Please choose a shape',
                name: 'shapes',
                choices: [
                    'circle',
                    'triangle',
                    'square',
                ]
            },
            {
                type: 'input',
                message: 'Please type what color of background you would like.',
                name: 'background'
            }
        ])
            .then(({logo, color, shapes, background}) => {
                let shapeType;
                switch (shapes) {
                    case 'circle':
                        shapeType = new Circle();
                        break;
                        case 'triangle':
                            shapeType = new Triangle();
                            break;
                            case 'square':
                                shapeType = new Square();
                                break;
                }
                shapeType.setColor(background);
                const svg = new SVG();
                svg.setText(logo, color);
                svg.setShape(shapeType);
                return writeFile('logo.svg', svg.render());
            });
    }
}

module.exports = CLI;


