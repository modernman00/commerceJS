import React from 'react'
import { getLocalStorage } from '../helper/localStorage';


export default function User() {
    const name = getLocalStorage("username")
    const email = getLocalStorage("email")
    return (
        <div>
            THE USER PAGE

           {name} with the email, {email} ,You are in the User page
            
        </div>
    )
}
