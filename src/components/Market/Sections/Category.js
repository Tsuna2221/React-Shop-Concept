import React, { Component } from 'react';

class PathCategory extends Component {
    render() {
        return (
            <div className='PathCategory'>
                <p>{this.state.linkCategory.category_name + ' - ' + this.state.linkCategory.cid}</p>
            </div>
        );
    }

    state = {
        linkCategory: {}
    }

    componentDidMount = () => {
        //${match.params.category.replace(/([-])/g, ' ')
        let { history, match, location } = this.props
        let categoriesURL = `http://127.0.0.1:5000/categories?category=${match.params.category.replace(/([-])/g, ' ')}`

        fetch(categoriesURL).then(res => res.json()).then(res => {
            this.setState({...this.state, linkCategory: res.data})
            console.log(this.state.linkCategory)
        })
    }
}

export default PathCategory;