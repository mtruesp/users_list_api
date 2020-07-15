import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID dJ1fIyyr-78xLPDbBLkcqVPAiRUh6Mtkzvvm-7YK3dk'
    }
})