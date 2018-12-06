import React from 'react';
import { ToolHeader } from './ToolHeader'
import { UnorderedList } from './UnorderedList'
import { ColorForm } from './ColorForm';

export class ColorTool extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            colors: props.colors.concat(),
        };
    
    }

    addColor = (newColor) => {
        this.setState({
            colors: this.state.colors.concat(newColor),
        })
    }

    render() {
        return <>
            <ToolHeader headerText="Color Tewl"/>
            <UnorderedList items={this.state.colors}/>
            <ColorForm buttonText="Add Color" onSubmitColor={this.addColor}/>
        </>;
    }
}