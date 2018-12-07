// // 2. Create a component named CalcTool which performs the following actions: add, subtract, multiply and divide.

import React from 'react';

// export class CalcTool extends React.Component {

//     handleChange() {
//         console.log('add!');
//     }

//     render() {
//         return <div>
//             <div>
//                 Result:
//             </div>
//             <div>
//                 <label htmlFor="input">Input: </label>                    
//                 <input type="number" id="input" name="input" />
//             </div>
//             <div>
//                 <button type="button" onClick={this.handleChange}>+</button>
//                 <button type="button">-</button>
//                 <button type="button">*</button>
//                 <button type="button">/</button>
//             </div>
//         </div>
//     }
// }

export class CalcTool extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numInput: 0,
        };
    }

    change = e => this.setState({ numInput: Number(e.target.value) });

    render() {
        return <form>
            <div>
                Result: {this.props.result}
            </div>
            <div>
                <label htmlFor="num-input">Input:</label>
                <input type="text" value={this.state.numInput} onChange={this.change} />
            </div>
            <div>
                <button type="button" onClick={() => this.props.add(this.state.numInput)}>+</button>
                <button type="button" onClick={() => this.props.subtract(this.state.numInput)}>-</button>
                <button type="button" onClick={() => this.props.multiply(this.state.numInput)}>*</button>
                <button type="button" onClick={() => this.props.divide(this.state.numInput)}>/</button>
            </div>
        </form>;
    }
}



