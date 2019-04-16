import React from 'react';

var Counter = (props) => {
    const drawCounter = () => {
        return props.data.map(dataCount => {
            return (
                <div className='mar-child-18' key={dataCount.label}>
                    <p className="c-light2 s-14">{dataCount.label}</p>
                    <p className="s-22 w-bold mar-t-4" style={{color: props.color}}>{dataCount.count}</p>
                </div>
            )
        })
    }

    return (
        <div className="d-flex bs-dashboard pad-18">
            {drawCounter()}
        </div>
    );
}

export default Counter;