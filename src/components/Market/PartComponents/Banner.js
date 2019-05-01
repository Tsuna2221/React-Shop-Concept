import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className='main-banner-container mar-t-16'>
                <div className='Banner-Container'>
                    
                    {this.drawBanner(this.state.bannerLength)}
                </div>
            </div>
        );
    }

    state = {
        index: 1,
        bannerLength: 4
    }

    componentDidMount = () => {
        this.transitionTiming(this.state.bannerLength)
    }

    drawBanner = (num) => {
        var times = []
        for(var i = 0; i < num; i++){ times.push(i) }

        return times.slice().map((e, i) => <div key={i} className={`banner d-flex a-cen nb${i + 1}`}>{i + 1}</div>)
    }

    transitionTiming = (num) => setInterval(() => {
        var times = []
        for(var i = 0; i < num; i++){ times.push(i) }

        !times.includes(this.state.index) ? this.setState({index: 1}) : this.setState({index: this.state.index + 1})

        this.setTransition()  
    }, 3000)

    setTransition = () => document.querySelector('.Banner-Container').style.transform = `translateX(-${this.state.index - 1}00%)`
}

export default Banner;