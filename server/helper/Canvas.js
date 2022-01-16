import {adjust, getContrastYIQ, parseName, stringToColour} from "./helper";

class Canvas {
    constructor(name, color, sizes, canvas) {
        this.name = name
        this.color = color
        this.sizes = sizes

        this.canvas = canvas
        this.context = canvas.getContext('2d')
    }

    draw() {
        this.context.beginPath()

        this.fill()
            .calculate()
            .darken()
            .text()
            .stroke()

        return this.canvas
    }

    fill() {
        this.context.fillStyle = stringToColour(this.name);

        return this
    }

    darken() {
        this.context.lineWidth = 20;
        this.context.strokeStyle = adjust(this.color, -10)

        return this
    }

    text() {
        const [centerHeight, centerWidth] = this.canvasSizes()

        this.context.font = '70px Arial'
        this.context.textAlign = 'center'
        this.context.textBaseline = 'middle'
        this.context.fillStyle = getContrastYIQ(this.color)
        this.context.fillText(parseName(this.name), centerHeight, centerWidth)

        return this
    }

    stroke() {
        this.context.stroke()

        return this
    }

    canvasSizes() {
        const centerWidth = this.canvas.width / 2
        const centerHeight = this.canvas.height / 2

        return [centerHeight, centerWidth]
    }
}

export default Canvas