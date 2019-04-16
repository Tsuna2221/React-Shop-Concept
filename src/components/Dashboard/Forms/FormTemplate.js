import React, {Component} from 'react';

class FormInput extends Component {
    render() {
        var { type, handling, jkey, label, action, text } = this.props

        if(type === 'fit' || !type){
            return (
                <div key={label} className="form-input mar-t-16">
                    <p className="s-13 c-light2">{label}</p>
                    <input onChange={handling} name={jkey} className="si-widthfit mar-t-10" type="text"/>
                </div>
            )
        }else if(type === 'area'){
            return (
                <div key={label} className="form-input mar-t-16">
                    <p className="s-13 c-light2">{label}</p>
                    <textarea onChange={handling} name={jkey} className="si-widthfit mar-t-10" cols="30" rows="10"></textarea>
                </div>
            )
        }else if(type === 'medium'){
            return (
                <div key={label} className="form-input mar-t-16">
                    <p className="s-13 c-light2">{label}</p>
                    <input onChange={handling} name={jkey} className="si-widthmedium mar-t-10" type="text"/>
                </div>
            )
        }
        else if(type === 'small'){
            return (
                <div key={label} className="form-input mar-t-16">
                    <p className="s-13 c-light2">{label}</p>
                    <input onChange={handling} name={jkey} className="si-widthsmall mar-t-10" type="text"/>
                </div>
            )
        }else if(type === 'image'){
            return (
                <div key={label} className="form-input mar-t-16">
                    <p className="s-13 c-light2">{label}</p>
                    <div className="d-flex a-bet">
                        {this.drawImagePreview()}
                    </div>
                </div>
            )
        }else if(type === 'button'){
            return (
                <div key={label} className="form-input mar-t-30">
                    <div onClick={action} className="tx-button" style={{backgroundColor: this.props.color}}>{text}</div>
                </div>
            )
        }else if(type === 'select'){
            return (
                <div key={label} className="form-input mar-t-16">
                    <p className="s-13 c-light2">{label}</p>
                    <select onChange={handling} name={jkey} className="si-widthmedium mar-t-10">
                        <option value=""></option>
                        {this.drawSelection(this.props.selection)}
                    </select>
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

    drawSelection = (data) => {
        return data.map(select => {
            return <option value={select}>{select}</option>
        })
    }
}

export default FormInput;