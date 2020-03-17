import { validate } from 'tennis-utils'
import { NotAllowedError } from 'tennis-errors'
import context from './context'

//const { env: { REACT_APP_API_URL: API_URL } } = process

const API_URL = process.env.REACT_APP_API_URL

export default (function (userMember, password) {
    validate.string(userMember, 'email')
    // validate.email(email)
    validate.string(password, 'password')

    // ${API_URL}
    return (async () => {
        const response = await fetch(`http://localhost:8080/users/auth`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userMember, password })
        })

        const { status } = response

        if (status === 200) {
            const { token } = await response.json()
            
            this.token = token

            return
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