const { modifyBook } = require('../../logic')
const { NotFoundError } = require('tennis-errors')

module.exports = (req, res) => {
    const { payload: { sub: userId }, body:{number, date}, params: {id: bookingId} } = req

    try {
        debugger
        modifyBook(userId, number, date, bookingId)
            .then((hour) =>
                res.status(200).json({ message: `You've successfully updated your book to ${hour}` })
            )
            .catch(({ message }) =>
                res
                    .status(401)
                    .json({
                        error: message
                    })
            )
    } catch (error) {
        let status = 400

        switch (true) {
            case error instanceof NotFoundError:
                status = 404 // not found
                break
        }

        const { message } = error

        res
            .status(status)
            .json({
                error: message
            })
    }
}