import axios from "axios";

export default axios.create({
    baseURL:  "http://localhost:3500/chai"    
});                                                               // here we have to pass the api url which has the data. the baseURL url in caps is a convention