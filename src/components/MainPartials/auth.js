import Cookies from 'js-cookie'
import Axios from 'axios';

var isLogged = () => {
    var user = Cookies.get('user')
    if(user){
        return true
    }
    return false
}

var getToken = () => {
    var cookie = Cookies.get('user')
    return JSON.parse(cookie)
}

async function getUser(){
    var cookie = Cookies.get('user')
    if(cookie){
        cookie = JSON.parse(cookie)

        var { id, secret, token } = cookie.data
        var url = `http://127.0.0.1:5000/customer?id=${id}&secret=${secret}&token=${token}`
    
        var data = await Axios.get(url).then(res => res.data)
    
        return data
    }
}

export { isLogged, getUser, getToken }