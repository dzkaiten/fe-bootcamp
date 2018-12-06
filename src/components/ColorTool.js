import React from 'react';
import { ToolHeader } from './ToolHeader'

export class ColorTool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            colors: props.colors.concat(),
            newColor: '',
        };
    
    }

    change = e => {
        this.setState({
            [ e.target.name ]: e.target.value,
        }, () => {
            console.log(this.state);
        });
    };

    addColor = () => {
        this.setState({
            colors: this.state.colors.concat(this.state.newColor),
            newColor: '',
        })
    }

    render() {
        return <>
            <ToolHeader headerText="Color Tewl"/>
            <ul>
                {this.state.colors.map((color, index) => <li key={index}>{color}</li>)}
            </ul>
            <form>
                <div>
                    <label htmlFor="new-color-input">New Color:</label>
                    <input type="text" id="new-color-input" name="newColor" value={this.state.newColor} onChange={this.change} />
                </div>
                <button type="button" onClick={this.addColor}>Add Color</button>
            </form>
        </>;
    }
}