import axios from "axios"

export const login = (data) =>  {
    // const config = {
    //     headers: (
    //         'Content-Type: application/json'
    //         )
    // }

    const response = axios.post("http://localhost:5000/Signup/find", data)
      
    return response

}