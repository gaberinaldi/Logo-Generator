class SVG {
    constructor () {
        this.textEl='';
        this.shapeEl='';
    }
    render () {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
    }
}

setText (message, color) {
    this.textEl=`<text x="150" y="125" font-size="50" text-anchor="middle" fill="${color}">${message}</text>`
}
setShape (shape) {
    this.shapeEl = shape.render();
}

module.exports = SVG;