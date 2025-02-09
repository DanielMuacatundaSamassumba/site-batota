import axios from 'axios'

const api = axios.create({
   // baseURL:"http://192.168.1.28:8000/"
   baseURL: "https://app.batota.ao/"
}) 

 export default api 