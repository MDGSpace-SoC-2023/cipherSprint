import axios from 'axios';

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.headers.post["Content-Type"] = "application/json";

const backend_client = axios.create({
  baseURL: 'http://localhost:8000/inno_api/', // replace with your Django backend API endpoint
});

export default backend_client;
>>>>>>>>> Temporary merge branch 2
