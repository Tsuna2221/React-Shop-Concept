import React, { Component } from 'react';
import Axios from 'axios';
import Cookies from 'js-cookie'

import { validate } from "../MainPartials/FormValidation"
import FormInput from "../MainPartials/FormTemplate"

class LoginForm extends Component {
    render() {
        var expirations = [
            { title: '10 minutes', value: 10 },
            { title: '20 minutes', value: 20 },
            { title: '30 minutes', value: 30 },
            { title: '1 hour', value: 60 },
            { title: '1 day', value: 1440 },
        ]

        return (
            <div className="form-dvn">
                <div>
                    <h1 className="c-blue s-26">Log In</h1>
                    <p className="c-medium s-18 mar-t-14">Doesn't have an account? <span onClick={this.props.changeScreen} className="c-blue clickable">Register Here</span></p>
                </div>
                <div className="ln-light mar-v-18"></div>
                <form onSubmit={this.formSubmit}>
                    <div className="row">
                        <FormInput cls="bg-light-gray t-clear-input br-normal bs-none no-outline pad-10 bs-invisible mar-t-10 sbw-fit" required handling={this.handleInput} label="E-mail" jkey="email" type="email"></FormInput>
                    </div>
                    <div className="row">
                        <FormInput cls="bg-light-gray t-clear-input br-normal bs-none no-outline pad-10 bs-invisible mar-t-10 sbw-fit" required handling={this.handleInput} label="Password" jkey="password" type="password"></FormInput>
                    </div>
                    <div className="row d-flex a-hor">
                        <FormInput cls="bg-light-gray t-clear-input br-normal bs-none no-outline pad-10 bs-invisible mar-t-10 sbw-small" required handling={this.handleInput} label="Keep me online for" jkey="timer" type="select" selection={expirations}></FormInput>
                    </div>
                </form>

                <div className="d-flex sbw-fit a-hor mar-t-16">
                    <div onClick={this.formSubmit} className="bt-normal">Log In</div>
                </div>
            </div>
        );
    }

    state = {
        form: {
            email: "",
            password: ""    
        }
    }

    handleInput = (e) => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    formSubmit = () => {
        var { email, password } = this.state.form
        var url = 'http://127.0.0.1:5000/customer/login'
        var time = this.state.form.timer ? parseInt(this.state.form.timer) : 10
        var expirateIn = (minutes) => (1 / 1440) * minutes;

        if(validate(email, 'email').valid && 
           validate(password, 'password').valid){
            this.props.setLoader(true)
            Axios.post(url, {email, password, timer: time})
                .then(res => Cookies.set('user', res.data, {
                    expires: expirateIn(time)
                }))
                .then(() => this.props.setLoader(false))
                .then(() => window.location.href = '/')
        }
    }
}

export default LoginForm;