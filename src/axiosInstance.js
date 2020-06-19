import axios from 'axios';

const instance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Access-Control-Allow-Origin']= 'http://localhost:3000'
 // headers.append('Access-Control-Allow-Credentials', 'true');
export default instance;