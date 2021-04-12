const URL = process.env.REACT_APP_API_URL

const Endpoint = {
    login: URL + '/auth/login',
    isAuth: URL + '/auth/check'
}
export default Endpoint