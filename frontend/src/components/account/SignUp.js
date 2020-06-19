import React, { Component } from 'react'
import InputForm from '../form/InputForm';
import { Form, Button, Alert } from "react-bootstrap"
import  {register}  from '../data/formData';
import ErrorBoundary from '../ErrorBoundary';
//import axios from "axios"


export default class SignUp extends Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
        this.state = {
            username: "",
            email: "",
            password: "",
            error: "",
            confirmPassword: "",
            data: register,
        };
    }



    Validate = (e) => {

        let value = e.target.value;
        let name = e.target.name;
        let err;
        if (value.length > 10) {
            err = value.length > 10 && "Your entry is above the limit: " + name;
        }

        this.setState({
            error: err,
            [name]: value,
        });

    }

    submit = (e) => {
        e.preventDefault();

        const {username, email, password} = this.state

        console.log(username, email, password)

        alert('submitted')
    }

    render() {
        return (

            <Form className="container" onSubmit={this.submit} encType="multipart/form-data">
                <Alert variant={this.state.error && "danger"}>
                    {this.state.error}
                </Alert>

                {
                    this.state.data.map((el) => {
                    return (
                        <ErrorBoundary key={el.attribute}>
                            <InputForm key={el.attribute}
                                label={el.label.toUpperCase()}
                                attribute={el.attribute}
                                type={el.type}
                                options={el.options}
                                Validate={this.Validate}
                                userData = {this.state.userData}
                                icon = {el.icon}

                            />
                        </ErrorBoundary>
                    );
                })}

                <Button variant="primary" size="lg" type="submit">
                    Submit
        </Button>
            </Form>
        );
    }

}
