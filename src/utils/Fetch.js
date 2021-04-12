import Axios from 'axios'

class Fetch {

    static post = (url, body) => {
        return new Promise((resolve, reject) => {
            Axios.post(url, body, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('authJwt')
                }
            })
                .then(response => resolve(response.data))
                .catch(response => reject(response.response.data))
        })
    }

    static get = (url) => {
        return new Promise((resolve, reject) => {
            Axios.get(url, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('authJwt')
                }
            })
                .then(response => resolve(response.data))
                .catch(response => reject(response.response.data))
        })
    }

    static put = (url, body) => {
        return new Promise((resolve, reject) => {
            Axios.put(url, body, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('authJwt')
                }
            })
                .then(response => resolve(response.data))
                .catch(response => reject(response.response.data))
        })
    }

    static delete = (url, body) => {
        return new Promise((resolve, reject) => {
            Axios.put(url, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('authJwt')
                },
                data: body
            })
                .then(response => resolve(response.data))
                .catch(response => reject(response.response.data))
        })
    }

}
export default Fetch