import React from 'react';
import PropTypes from 'prop-types';

export class ColorForm extends React.Component {

    static defaultProps = {
        buttonText: 'Submit Color',
    };

    static propTypes = {
        color: PropTypes.string,
        buttonText: PropTypes.string,
        onSubmitColor: PropTypes.func.isRequired,
    };
    
    constructor(props) {
        super(props);

        this.state = {
            color: props.color || '',
        };

    }

    change = e => {
        this.setState({
            [ e.target.name ]: e.target.value,
        }, () => {
            console.log(this.state);
        });
    };

    submitColor = () => {
        this.props.onSubmitColor(this.state.color);
        this.setState({
            color: '',
        });
    };

    colorInputEnter = e => {
        if (e.keyCode === 13) {
            e.preventDefault();
            this.submitColor();
        }
    }

    render() {
        return <form>
            <div>
                <label htmlFor="color-input">New Color:</label>
                <input type="text" id="color-input" name="color" value={this.state.color} onChange={this.change} onKeyDown={this.colorInputEnter}/>
            </div>
            <button type="button" onClick={this.submitColor}>{this.props.buttonText}</button>
        </form>
    }
}