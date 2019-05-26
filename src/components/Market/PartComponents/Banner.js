import React, { Component } from 'react';

class Banner extends Component {
    render() {
        return (
            <div className='main-banner-container'>
                <div className='Banner-Container'>
                    {this.drawBanner(this.props.images.length)}
                </div>
            </div>
        );
    }

    state = {
        index: 1,
    }

    componentDidMount = () => {
        this.transitionTiming()
    }

    drawBanner = (num) => {
        var times = []
        var { images } = this.props
        for(var i = 0; i < num; i++){ times.push(i) }

        return times.slice().map((e, i) => <div key={i} className={`banner d-flex a-cen nb${i + 1}`}> <img className="auto-height sbw-inherit" src={images[i]} alt=""/> </div>)
    }

    transitionTiming = () => setInterval(() => {
        var times = []
        var { images } = this.props
        for(var i = 0; i < images.length; i++){ times.push(i) }

        !times.includes(this.state.index) ? this.setState({index: 1}) : this.setState({index: this.state.index + 1})

        this.setTransition()  
    }, 3000)

    setTransition = () => document.querySelector('.Banner-Container').style.transform = `translateX(-${this.state.index - 1}00%)`
}

export default Banner;