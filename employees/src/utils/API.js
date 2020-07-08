import axios from "axios";

function GetEmployees () {
    return axios.get("https://randomuser.me/api/?results=15")
}

export default GetEmployees