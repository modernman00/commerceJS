import React, { useState } from 'react'
import isEmail from 'validator/es/lib/isEmail';
import isEmpty from 'validator/es/lib/isEmpty';
import equals from 'validator/es/lib/equals';
import { Form, Button } from "react-bootstrap"
import { message } from "../helper/Message"
// import axios from "axios"
import { signUp } from "../../api/auth"
// import  {register}  from '../data/formData';
// import ErrorBoundary from '../ErrorBoundary';
import loader from '../helper/Loader';

export const Register = () => {

    const [formData, setFormData] = useState({
        username: "Modernman00",
        email: "woguns@ymail.com",
        password: "123abc",
        confirmPassword: "123abc",
        successMsg: false,
        errorMsg: false,
        loading: false
    })


    let { username, email, password, confirmPassword, successMsg, errorMsg, loading } = formData

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

        if (isEmpty(username) || isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword))
            setFormData({
                ...formData, errorMsg: "All Fields are required"
            })

        else if (!isEmail(email)) setFormData({
            ...formData, errorMsg: "Your email is not valid"
        })

        else if (!equals(password, confirmPassword)) setFormData({
            ...formData, errorMsg: "Your passwords do not match"
        })

        else {
            const data = { username, email, password }

            setFormData({
                ...formData, loading: true
            })
            //call the api for signup
            signUp(data)
                // axios.post("http://localhost:5000/Signup/create", data)
                .then(res => {          
                    setFormData({
                        username: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                        loading: false,
                        successMsg: res.data.successMessage
                    })

                  //  window.location = "/show"
                })
                .catch(err => {
                    console.log('There is an failure', err.response.data.errors)
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
                <Form.Label>Username</Form.Label>
                <Form.Control type='text' placeholder='username' name="username" id="username" autoComplete="on" value={username} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>email</Form.Label>
                <Form.Control type='email' placeholder='email' name="email" id="email" autoComplete="on" value={email} onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>password</Form.Label>
                <Form.Control type='password' placeholder='password' name="password" id="password" value={password} autoComplete="on" onChange={handleChange} />
            </Form.Group>

            <Form.Group>
                <Form.Label>Confirm password</Form.Label>
                <Form.Control type='password' placeholder='password' name="confirmPassword" value={confirmPassword} id="confirmPassword" autoComplete="on" onChange={handleChange} />
            </Form.Group>


            <Button variant="primary" size="lg" type="submit">
                Submit
        </Button>

            {/* <p> {JSON.stringify(formData)} </p> */}


        </Form>
    )
}
