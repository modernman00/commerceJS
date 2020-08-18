import axios from "axios"

export const signUp = async (data) =>  {
    // const config = {
    //     headers: (
    //         'Content-Type: application/json'
    //         )
    // }

    const response = await axios.post("http://localhost:5000/Signup/create", data)
      
    return response

}