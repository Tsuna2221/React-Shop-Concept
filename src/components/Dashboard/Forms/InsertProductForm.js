import React, { Component } from 'react';
import FormInput from '../../MainPartials/FormTemplate'
import axios from 'axios'
import cloudinary from './cloudinary'

cloudinary.config({ 
    cloud_name: 'db5msl9ld', 
    api_key: '965573557482127', 
    api_secret: 'pNX9IU-OAsbSHC48Eze8Ii85Odg' 
});

class ProductForm extends Component {
    render() {
        return (
            <div className="product-form">
                <div className="row">
                    <FormInput handling={this.handleForm} type='fit' label="Title" jkey="title" fit/>
                </div>
                <div className="row d-flex a-bet">
                    <FormInput handling={this.handleForm} label="Manufacturer" jkey="company"/>
                    <FormInput handling={this.handleForm} selection={this.props.categories} type="select" label="Category" jkey="category"/>
                    <FormInput handling={this.handleForm} label='Sub-categories' jkey="subcategories"/>
                    <FormInput handling={this.handleForm} label="Price" jkey="price"/>
                    <FormInput handling={this.handleForm} label="Discount%" jkey="price_percentage"/>
                </div>
                <div className="row">
                    <FormInput handling={this.handleForm} type="area" jkey="description" label="Description"/>
                </div>
                <div className="row">
                    <FormInput type="image" jkey="images" label="Images" action={this.handleImageUpload} imagePreview={this.state.imageArray}/>
                </div>
                <div className="row">
                    <FormInput type="button" color={this.props.color} text="Create Product" action={this.submitForm}/>
                </div>
            </div>
        );
    }

    state = {
        imageArray: [],
        form: {},
        imageURLs: []
    }

    handleImageUpload = (e) => {
        var image = e.target.files[0]
        var element = e.target.parentElement

        var getBase64 = (file) => {
            var reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                var node = document.createElement("img");  
                var loadedImages = this.state.imageArray
                element.innerHTML = ''
                element.appendChild(node).setAttribute("class", 'fit-height sbw-fit')
                element.appendChild(node).setAttribute("src", reader.result)

                loadedImages.push(reader.result)
                this.setState({imageArray: loadedImages})
            };
            reader.onerror = function (error) {
              console.log('Error: ', error);
            };
        }

        getBase64(image)
    }

    handleForm = (e) => {
        console.log(e.target.value)
        this.setState({
            ...this.state,
            form: {...this.state.form, [e.target.name]: e.target.value}
        })
    }

    submitForm = () => {
        var url = 'http://127.0.0.1:5000/products/insert'
        var {title, company, category, price, subcategories, price_percentage, description } = this.state.form
        var imageState = this.state.imageArray
        var folderString = Math.random().toString(36).substr(2,6)

        async function imageLoop(){
            var imagesList = []

            for(var i = 0; i < imageState.length; i++){
                await cloudinary.v2.uploader.upload(imageState[i], {folder: folderString}, (err, res) => {
                    imagesList.push(res.secure_url)
                })
            }
            
            var result = await imagesList

            return result
        }

        var data = {
            title,
            company,
            price: parseInt(price),
            price_percentage: parseInt(price_percentage),
            quantity: 100,
            num_of_shares: 0,
            about: {
                description, 
                release_date: Date.now(),
                rating: 0
            },
            category: {
                category_name: category,
                sub_category: {   
                    name: subcategories.match(/\[(.*)\]/).pop(),
                    type: subcategories.match(/\((.*)\)/).pop()
                }
            }
        }

        imageLoop().then(res => {
            var images = res
            data.images = images

            console.log(data)
            axios.post(url, data).then(res => {
                window.location.href = 'https://localhost:3000/admin/products'
            })
        })
    }
}
export default ProductForm;