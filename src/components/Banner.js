import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className='main-banner-container'>
                <div className='Banner-Container'>
                    {this.drawBanner(5)}
                </div>
            </div>
        );
    }

    state = {
        index: 1
    }

    drawBanner = (num) => {
        var times = []
        for(var i = 0; i < num; i++){ times.push(i) }

        this.transitionTiming(num)

        return times.slice().map((e, i) => <div key={i} className={`banner d-flex a-cen nb${i + 1}`}>{i + 1}</div>)
    }

    transitionTiming = (num) => setTimeout(() => {
        var times = []
        for(var i = 0; i < num; i++){ times.push(i) }

        !times.includes(this.state.index) ? this.setState({index: 1}) : this.setState({index: this.state.index + 1})

        this.setTransition()
        
    }, 7000)

    setTransition = () => document.querySelector('.Banner-Container').style.transform = `translateX(-${this.state.index - 1}00%)`
}

export default Banner;