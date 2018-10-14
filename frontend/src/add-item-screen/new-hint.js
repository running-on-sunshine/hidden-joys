import React from 'react';

class NewHintForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hint: ''
        };
    };
    render() {
        let generateId = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString();
        return (
            <div className='new-hint-container'>
                <input
                    className='input-box fill-height'
                    type='text'
                    maxLength='50'
                    value={this.state.hint}
                    onChange={event => {
                        this.setState({hint: event.target.value})
                    }}
                />
                <button
                    className='form-button fill-height'
                    onClick={event => {
                        event.preventDefault();
                        this.props.hideNoHintsMessage();
                        this.props.addNewHint({id: generateId(), hint: this.state.hint});
                        this.setState({hint: ''});
                    }}
                >+</button>
            </div>
        )
    }
};

export default NewHintForm;