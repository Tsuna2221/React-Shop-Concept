import React from 'react';

const Image = ({images}) => (
     <div className='images-container bs-dashboard'>
        <img className="d-flex mar-h-cen" src={images[0]} alt=""/>
    </div>
)

export default Image;