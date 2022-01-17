import Canvas from '../helper/Canvas'

class Rectangle extends Canvas {

    calculate() {
        const [centerHeight, centerWidth] = this.canvasSizes()

        const [height, width] = this.sizes
        const [x, y] = [centerWidth - (width / 2), centerHeight - (height / 2)]
        this.context.fillRect(x, y, width, height)
        this.context.fill()

        return this
    }

}

export default Rectangle