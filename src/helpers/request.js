import axios from 'axios'
import { Message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.baseURL = '//blog-server.hunger-valley.com'

export default function request(url, method = 'GET', data = {}) {
    return new Promise((resolve, reject) => {
        const options = {
            url,
            method
        }

        if (method.toLowerCase() === 'get') {
            options.params = data
        } else {
            options.data = data
        }

        if (localStorage.token) {
            options.headers = { 'Authorization': localStorage.token }
        }

        axios(options).then(res => {
            if (res.data.status === 'ok') {
                console.log(res.data)
                if (res.data.token) {
                    localStorage.token = res.data.token
                }
                resolve(res.data)
            } else {
                console.log(res.data)
                Message.error(res.data.msg)
                reject(res.data)
            }
        }).catch(err => {
            console.log(err)
            Message.error('Network Error!')
            reject({msg: 'Network Error!'})
        })
    })
}
