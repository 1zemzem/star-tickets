import axios from "axios";

export const API_URL = 'http://localhost:5000';

export const host = axios.create({
    baseURL: API_URL
});

export const authHost = axios.create({
    baseURL: API_URL 
})