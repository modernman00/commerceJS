import React, { useState, useEffect } from 'react'
import isEmail from 'validator/es/lib/isEmail';
import isEmpty from 'validator/es/lib/isEmpty';
import { Form, Button } from "react-bootstrap"
import { message } from "../helper/Message"
// import axios from "axios"
import { login } from "../../api/Login"
// import  {register}  from '../data/formData';
// import ErrorBoundary from '../ErrorBoundary';
import loader from '../helper/Loader';
import { cookieStorageSet, cookieStorageCheck } from '../helper/authenticate';
import { getLocalStorage } from '../helper/localStorage';


const SignIn = () => {

    useEffect(()=> {
        const user = getLocalStorage('user')
        let redirect =""
        if(user){
        redirect = (user.role === 0) ? "/profile" : "/admin"}
        cookieStorageCheck('token', 'user', redirect )
    }, [])

    const [formData, setFormData] = useState({
        email: "woguns@ymail.com",
        password: "heineken1",
        successMsg: false,
        errorMsg: false,
        loading: false
    })


    let { email, password, successMsg, errorMsg, loading } = formData

    const handleChange = (e) => {

        let value = e.target.value;
        let name = e.target.name;

        if (value.length > 10) {
            setFormData(
                errorMsg = "Your entry is above the required limit"
            )
        }

        setFormData({
            ...formData, [name]: value,
            successMsg: '',
            errorMsg: '',
        })

    }

    const submit = (e) => {
        e.preventDefault();

        if (isEmpty(email) || isEmpty(password))
            setFormData({
                ...formData, errorMsg: "All Fields are required"
            })

        else if (!isEmail(email)) setFormData({
            ...formData, errorMsg: "Your email is not valid"
        })
        else {
            const data = { email, password }

            setFormData({
                ...formData, loading: true
            })
            //call the api for signup
            login(data)
               .then(res => {
                    setFormData({                       
                        loading: false,
                    })

                cookieStorageSet(res.data.token, res.data.user)

                const redirect = (res.data.user.role === 0) ? "/profile" : "/admin"

                cookieStorageCheck('token', 'user', redirect)               
     
                })
                .catch(err => {
                    console.log('Error: ', err.response.data.errors)
                    setFormData({
                        ...formData, loading: false, errorMsg: err.response.data.errors
                    })
                })
        }


    }



    return (

        <Form className="container" onSubmit={submit} encType="multipart/form-data">

            {errorMsg && message('error', errorMsg)}
            {successMsg && message('success', successMsg)}
            {loading && loader()}

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' placeholder='this could also be your email' name="email" id="email" autoComplete="on" value={email} onChange={handleChange} />
            </Form.Group>


            <Form.Group>
                <Form.Label>password</Form.Label>
                <Form.Control type='password' placeholder='password' name="password" id="password" value={password} autoComplete="on" onChange={handleChange} />
            </Form.Group>


            <Button variant="primary" size="lg" type="submit">
                Submit
        </Button>

            {/* <p> {JSON.stringify(formData)} </p> */}


        </Form>
    )
}

export default SignIn