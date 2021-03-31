import axios from 'axios';

const token = localStorage.getItem('@token_user');

const api = axios.create({
        baseURL: 'https://api.spotify.com/v1/',
        Accept: "application/json",
        ContentType: "application/json",
        headers: { 'Authorization' : ('Bearer ' + token) },
    });

export default api;