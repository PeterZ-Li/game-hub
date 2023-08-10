import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd750e5e04bdb4009b9dc5ec4a3cf9739'
    }
})