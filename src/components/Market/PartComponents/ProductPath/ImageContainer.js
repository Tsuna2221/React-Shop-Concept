import React, { Component } from 'react';

class Image extends Component {
    render() {
        var { images } = this.props
        return (
            <div className='images-container bs-dashboard'>
                <img className="d-flex mar-h-cen" src={images ? images[0] : ''} alt=""/>
            </div>
        );
    }

    state = {

    }
}

export default Image;