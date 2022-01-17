const parseName = (name) => {
    const splitNameArray = name.toLocaleUpperCase('tr').split(' ')
    const {0: firstName, [splitNameArray.length - 1]: lastName} = splitNameArray

    return firstName[0] + lastName[0]
}

const stringToColour = (str) => {
    let hash = 0;
    str = str.toLocaleLowerCase('tr')

    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
        const value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}

const getContrastYIQ = (hexColor) => {

    if (hexColor[0] === '#') hexColor = hexColor.slice(1)

    const [r, g, b] = RGB(hexColor)
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000

    return (yiq >= 128) ? '#000000' : '#ffffff'
}

const RGB = (hexColor) => {
    const rgb = []
    for (let i = 0; i < hexColor.length; i += 2) {
        rgb.push(parseInt(hexColor.substr(i, 2), 16))
    }

    return rgb
}

const initCapitalize = () => {
    Object.defineProperty(String.prototype, 'capitalize', {
        value: function () {
            return this.charAt(0).toLocaleUpperCase('tr') + this.slice(1);
        },
        enumerable: false
    });
}

const getObject = (fileName, ...args) => {
    const shapeObject = import(`${__dirname}/../shapes/${fileName}.js`)

    return new Promise(((resolve, reject) => {
        shapeObject.then(module => {
            return module.default
        }).then(obj => {
            resolve(new obj(...args))
        }).catch(e => {
            reject(e)
        })
    }))
}

const adjust = (color, amount) => {
    return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
}

export {
    parseName,
    stringToColour,
    getContrastYIQ,
    initCapitalize,
    getObject,
    adjust,
    RGB
}