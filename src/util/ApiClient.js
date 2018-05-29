import axios from 'axios';
import store from '../store';
import { URL } from '../config/Api';

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


export const apiClient = function () {
    const token = store.getState().token;
    const params = {
        baseURL: URL,
        headers: { 'Authorization': 'Token ' + token }
    };
    return axios.create(params);
}




// import axios from 'axios';

// export default axios.create({
//   baseURL: `http://jsonplaceholder.typicode.com/`
// });