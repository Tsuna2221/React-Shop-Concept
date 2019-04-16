import React, { Component } from 'react';
import FormInput from './FormTemplate'
import axios from 'axios'


class CategoryForm extends Component {
    render() {
        return (
            <div className="category-form">
                <div className="row">
                    <FormInput handling={this.handleForm} type='fit' label="Category Name" jkey="category_name" fit/>
                </div>
                <div className="row">
                    <FormInput type="button" color={this.props.color} text="Create Category" action={this.submitForm}/>
                </div>
            </div>
        );
    }

    state = {
        form: {}
    }

    handleForm = (e) => {
        this.setState({
            ...this.state,
            form: {...this.state.form, [e.target.name]: e.target.value}
        })
    }

    submitForm = () => {
        var url = 'http://127.0.0.1:5000/categories/insert'
        var { category_name } = this.state.form

        var data = {
            category_name
        }

        axios.post(url, data).then(res => {
            window.location.href = 'http://localhost:3000/admin/categories'
        })
    }
}
export default CategoryForm;