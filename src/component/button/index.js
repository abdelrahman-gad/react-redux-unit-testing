import React , {Component} from 'react';
import PropTypes from 'prop-types'


class SharedButton extends Component {

    submitEvent(){
        if(this.props.submitEvent){
            this.props.submitEvent();
        }
    }
    render(){
        const {buttonText} = this.props;
        return (
            <div>
                <button onClick={()=>this.submitEvent()}  data-test="buttonComponent">  {buttonText} </button>
            </div>
        )
    }


}

SharedButton.PropTypes = {
    buttonText:PropTypes.string,
    emitEvent:PropTypes.func
};
export default SharedButton;