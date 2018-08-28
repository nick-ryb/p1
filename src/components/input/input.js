import React, {Component} from "react";
import './input.css';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='wrap'>
                <input
                    type='text'
                    placeholder='value'
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    style={this.props.style}
                />
            </div>
        );
    }
}

Input.defaultProps = {};

export default Input;