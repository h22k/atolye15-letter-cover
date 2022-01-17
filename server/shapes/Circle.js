import Canvas from '../helper/Canvas'

class Circle extends Canvas {

    calculate() {
        const [centerHeight, centerWidth] = this.canvasSizes()

        const radius = this.sizes[0]
        this.context.arc(centerWidth, centerHeight, radius, 0, 2 * Math.PI, false);
        this.context.fill()

        return this
    }

}

export default Circle