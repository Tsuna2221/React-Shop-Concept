import React, {Component} from 'react';

class FormInput extends Component {
    render() {
        if(this.props.type === 'fit' || !this.props.type){
            return (
                <div key={this.props.label} className="form-input mar-t-16">
                    <p className="s-13 c-light2">{this.props.label}</p>
                    <input onChange={this.props.handling} name={this.props.jkey} className="si-widthfit mar-t-10" type="text"/>
                </div>
            )
        }else if(this.props.type === 'area'){
            return (
                <div key={this.props.label} className="form-input mar-t-16">
                    <p className="s-13 c-light2">{this.props.label}</p>
                    <textarea onChange={this.props.handling} name={this.props.jkey} className="si-widthfit mar-t-10" cols="30" rows="10"></textarea>
                </div>
            )
        }else if(this.props.type === 'medium'){
            return (
                <div key={this.props.label} className="form-input mar-t-16">
                    <p className="s-13 c-light2">{this.props.label}</p>
                    <input onChange={this.props.handling} name={this.props.jkey} className="si-widthmedium mar-t-10" type="text"/>
                </div>
            )
        }
        else if(this.props.type === 'small'){
            return (
                <div key={this.props.label} className="form-input mar-t-16">
                    <p className="s-13 c-light2">{this.props.label}</p>
                    <input onChange={this.props.handling} name={this.props.jkey} className="si-widthsmall mar-t-10" type="text"/>
                </div>
            )
        }else if(this.props.type === 'image'){
            return (
                <div key={this.props.label} className="form-input mar-t-16">
                    <p className="s-13 c-light2">{this.props.label}</p>
                    <div className="d-flex a-bet">
                        {this.drawImagePreview()}
                    </div>
                </div>
            )
        }else if(this.props.type === 'button'){
            return (
                <div key={this.props.label} className="form-input mar-t-30">
                    <div onClick={this.props.action} className="tx-button" style={{backgroundColor: this.props.color}}>Insert Products</div>
                </div>
            )
        }
    }

    state = {
        numOfPreviews: 6
    }

    drawImagePreview = () => {
        var num = this.state.numOfPreviews 
        var containers = []

        for(var i=0; i < num; i++){
            containers.push(<div key={i} data-img={i} className="si-image mar-t-10 d-flex a-cen s-36 w-semibold c-light2 no-select pos-relative">+<input type="file" name="image" className="preview-input no-outline clickable" onChange={this.props.action} /></div>)
        }

        return containers.map(container => container)
    }
}

export default FormInput;