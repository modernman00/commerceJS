import React, { useState, useEffect } from 'react'
import { getLocalStorage } from '../helper/localStorage';
import { notAuthenticated } from '../helper/authenticate';

export default function Profile() {
    const [user, setUser] = useState(getLocalStorage('user'))
     
    useEffect(()=> {
       notAuthenticated('token', 'user', '/login')
       let data = getLocalStorage('user')
       setUser(data)
 
    },[])   

    console.log(user)
    return (
        <div>

           {user.username} 
            with the email, 
           {user.email} ,
            You are in the profile page
            
        </div>
    )
}
