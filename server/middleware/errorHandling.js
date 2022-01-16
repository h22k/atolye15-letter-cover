const errorHandling = (err, req, res, next) => {
    if (err) {
        res.json({
            errorMsg: err.message,
            statusCode: 422
        }, 422)
    }

    next()
}

export default errorHandling