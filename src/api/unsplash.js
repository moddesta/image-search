import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
        'Client-ID iHwUEXBcbB00Gp9np6A5MXtrqqkXDC0n2Dd47jnivAc',
    }
});

