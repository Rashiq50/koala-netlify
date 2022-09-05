import axios from "axios";

const axiosWrapper = axios.create({
    baseURL: "https://api.onkoala.com/",
    headers:
    {
        "content-type": "application/json",
        "Accept": "application/ json"
    }
});

export default axiosWrapper;