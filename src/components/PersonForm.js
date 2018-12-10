import React from 'react';
import PropTypes from 'prop-types';

export class PersonForm extends React.Component {

    static defaultProps = {
        buttonText: 'Submit Person',
    };

    static propTypes = {
        buttonText: PropTypes.string,
        // onSubmitPerson: PropTypes.func.isRequired,
    }

    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
        }
    }

    change = e => {
        this.setState({
            [ e.target.name ]: e.target.value,
        }, () => {
            console.log(this.state);
        })
    }

    submitPerson = () => {
        // Insert - POST collection URL + request body
        fetch('http://localhost:3050/people', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                firstName: this.state.firstName,
                lastname: this.state.lastName,
            })
        })
            .then(res => res.json())
            .then(person => { 
                // Get All - GET collection URL
                fetch('http://localhost:3050/people')
                    .then(res => res.json())
                    .then((people => { console.log(people); return person.id }))
                .then(personId => fetch('http://localhost:3050/people/' + personId, {
                    method: 'DELETE',    
                }));
            })

        this.setState({
            firstName: '',
            lastName: '',
        });
    }

    render() {
        return <form>
        <div>
            <label htmlFor="input-first-name">First Name: </label>                    
            <input type="text" id="input-first-name" name="firstName" value={this.state.firstName} onChange={this.change} />
        </div>
        <div>
            <label htmlFor="input-last-name">Last Name: </label>                    
            <input type="text" id="model-input" name="lastName" value={this.state.lastName} onChange={this.change} />
        </div>
        <div>
            <button type="button" onClick={this.submitPerson}>{this.props.buttonText}</button>
        </div>
    </form>
    }


}