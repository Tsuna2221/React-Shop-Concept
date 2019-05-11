import React, { Component } from 'react';

import FormInput from "../MainPartials/FormTemplate"

class LoginForm extends Component {
    render() {
        return (
            <div className="form-dvn">
                <div>
                    <h1 className="c-blue s-26">Log In</h1>
                    <p className="c-medium s-18 mar-t-14">Doesn't have an account? <span onClick={this.props.changeScreen} className="c-blue clickable">Register Here</span></p>
                </div>
                <div className="ln-light mar-v-18"></div>
                <form onSubmit={this.formSubmit}>
                    <div className="row">
                        <FormInput cls="bg-light-gray t-clear-input br-normal bs-none no-outline pad-10 bs-invisible mar-t-10 sbw-fit" required handling={this.handleInput} label="E-mail" jkey="email"></FormInput>
                    </div>
                    <div className="row">
                        <FormInput cls="bg-light-gray t-clear-input br-normal bs-none no-outline pad-10 bs-invisible mar-t-10 sbw-fit" required handling={this.handleInput} label="Password" jkey="password" type="password"></FormInput>
                    </div>
                </form>

                <div className="d-flex sbw-fit a-hor mar-t-16">
                    <div onClick={this.formSubmit} className="bt-normal">Log In</div>
                </div>
            </div>
        );
    }

    state = {

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
        console.log(this.state.form)
    }
}

export default LoginForm;