import { NotAllowedError } from 'tennis-errors'
import context from './context'
import { validate } from 'tennis-utils'

//const { env: { REACT_APP_API_URL: API_URL } } = process

const API_URL = process.env.REACT_APP_API_URL

export default (function (id) {
    validate.string(id, 'id')

    return (async () => {
        debugger
        const response = await fetch(`http://localhost:8080/users/bookings/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`
            }
        })

        const { status } = response

        if (status === 200) return 

        if (status >= 400 && status < 500) {
            const { error } = await response.json()

            if (status === 401) {
                throw new NotAllowedError(error)
            }

            throw new Error(error)
        }

        throw new Error('server error')
    })()
}).bind(context)