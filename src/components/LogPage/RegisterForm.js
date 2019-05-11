import React, { Component } from 'react';

import FormInput from "../MainPartials/FormTemplate"

class RegisterForm extends Component {
    render() {
        return (
            <div className="form-dvn">
                <div>
                    <h1 className="c-blue s-26">Create Account</h1>
                    <p className="c-medium s-18 mar-t-14">Already registered? <span onClick={this.props.changeScreen} className="c-blue clickable">Log in</span></p>
                </div>
                <div className="ln-light mar-v-18"></div>
                <form onSubmit={this.formSubmit}>
                    <div className="row d-flex a-bet">
                        <FormInput cls="bg-light-gray t-clear-input br-normal bs-none no-outline pad-10 bs-invisible mar-t-10" required handling={this.handleInput} label="First Name" jkey="first_name"></FormInput>
                        <FormInput cls="bg-light-gray t-clear-input br-normal bs-none no-outline pad-10 bs-invisible mar-t-10" required handling={this.handleInput} label="Last Name" jkey="last_name"></FormInput>
                    </div>
                    <div className="row">
                        <FormInput cls="bg-light-gray t-clear-input br-normal bs-none no-outline pad-10 bs-invisible mar-t-10 sbw-fit" required handling={this.handleInput} label="E-mail" jkey="email" type="email"></FormInput>
                    </div>
                    <div className="row">
                        <FormInput cls="bg-light-gray t-clear-input br-normal bs-none no-outline pad-10 bs-invisible mar-t-10 sbw-fit" required handling={this.handleInput} label="Confirm E-mail" jkey="confirm_email" type="email"></FormInput>
                    </div>
                    <div className="row">
                        <FormInput cls="bg-light-gray t-clear-input br-normal bs-none no-outline pad-10 bs-invisible mar-t-10 sbw-fit" required handling={this.handleInput} label="Password" jkey="password" type="password"></FormInput>
                    </div>
                </form>

                <div className="d-flex sbw-fit a-hor mar-t-16">
                    <div onClick={this.formSubmit} className="bt-normal">Sign Up</div>
                </div>
            </div>
        );
    }

    state = {
        form: {}
    }

    handleInput = (e) => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        console.log(this.state.form)
    }

    formSubmit = () => {
        console.log(this.state.form)
    }
}

export default RegisterForm;