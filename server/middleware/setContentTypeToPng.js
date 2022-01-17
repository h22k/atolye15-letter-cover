const setContentTypeToPng = (req, res, next) => {
    res.set('Content-Type', 'image/png')
    res.set('Content-Disposition', `attachment; filename="${req.name}.png"`)
    next()
}

export default setContentTypeToPng