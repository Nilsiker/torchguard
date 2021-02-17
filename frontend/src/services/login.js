import axios from 'axios'
const baseUrl = 'http://192.168.1.245:3001/api/login'

const login = async credentials => {
    const res = await axios.post(baseUrl, credentials)
    return res.data
}

const currentUser = () => {
    return { username: window.localStorage.getItem('username'), token: window.localStorage.getItem('token') }
}

const loggedIn= () => {
    return window.localStorage.getItem('token') != null
}

const logout = async () => {
    window.localStorage.removeItem('username')
    window.localStorage.removeItem('token')
}

const loginService = { login, currentUser, loggedIn, logout }

export default loginService