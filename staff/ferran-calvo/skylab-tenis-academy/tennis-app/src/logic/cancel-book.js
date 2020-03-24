import { NotAllowedError } from 'tennis-errors'
import context from './context'
import { validate } from 'tennis-utils'
require('dotenv').config()

//const { env: { REACT_APP_API_URL: API_URL } } = process

const API_URL = process.env.REACT_APP_API_URL

export default (function (id) {
    validate.string(id, 'id')

    return (async () => {
        const response = await fetch(`${API_URL}/users/bookings/${id}`, {
            method: 'DELETE',
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