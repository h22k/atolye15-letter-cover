const setContentTypeToPng = (req, res, next) => {
    res.set('Content-Type', 'image/png')
    next()

}

export default setContentTypeToPng