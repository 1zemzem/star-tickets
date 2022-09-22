import axios from "axios";

export const API_URL = 'http://localhost:5000';

export const API_URL_FILM = 'http://localhost:5000/api/film';

export const host = axios.create({
    baseURL: API_URL, 
    responseType: 'json'

});

export const authHost = axios.create({
    baseURL: API_URL,
    responseType: 'json' 
})