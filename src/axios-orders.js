import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f3c3c-default-rtdb.firebaseio.com/'
});

export default instance;