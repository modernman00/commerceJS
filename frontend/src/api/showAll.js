import axios from 'axios'

export const showAll = async () => {   
    const response = await axios.get("http://localhost:5000/Signup/show")
    .catch(error => console.error(error))
    return response.data
}


