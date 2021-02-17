import axios from 'axios'
const baseUrl = 'http://192.168.1.245:3001/api/signup'

const signup = async credentials => {
    const res = await axios.post(baseUrl, credentials)
    return res.data
}

const signupService = { signup }

export default signupService