// axios.js
import axios from 'axios';

const backend_client = axios.create({
  baseURL: 'http://localhost:8000/inno_api/', // replace with your Django backend API endpoint
});

export default backend_client;
