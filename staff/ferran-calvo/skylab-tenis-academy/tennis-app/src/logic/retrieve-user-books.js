import { NotAllowedError } from 'tennis-errors'
import context from './context'

//const { env: { REACT_APP_API_URL: API_URL } } = process

const API_URL = process.env.REACT_APP_API_URL

export default (function () {
    return (async () => {
        const [header, payload, signature] = this.token.split('.')
        if (!header || !payload || !signature) throw new Error('invalid token')

        const { sub } = JSON.parse(atob(payload))

        console.log(sub)
        if (!sub) throw new Error('no user id in token')
        const response = await fetch(`http://localhost:8080/users/bookings/${sub}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}`
            }
        })

        const { status } = response

        debugger
        if (status === 200) {
            const books = await response.json()

            return books
        }

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