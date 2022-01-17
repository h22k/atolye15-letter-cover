const errorHandling = (err, req, res, next) => {
    if (err) {
        res.status(422).json({
            errorMsg: err.message,
            statusCode: 422
        })
    }
    next()
}

export default errorHandling