import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Footer from './footer';
import SearchBox from './map-screen/search-box';
import addItemFetch from './add-item-screen/add-item-fetch';
import NewHintForm from './add-item-screen/new-hint';
import HintListings from './add-item-screen/hint-listing';
import './stylesheets/add-item-screen.css';

class AddItemScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentHint: '',
            title: '',
            location:'current',
            image: 'https://source.unsplash.com/_0aKQa9gr4s/',
            hints: [],
            showNoHintsMessage: false
        }
    };

    componentDidMount() {
        this.props.dispatch({
            type: 'UPDATE_ITEM_ID',
            itemId: ''
        });
        this.props.dispatch({
            type: 'UPDATE_FOUND_CODE',
            foundCode: ''
        });
    };

    render() {
        let updateStoreItemId = (id) => {
            this.props.dispatch({
                type: 'UPDATE_ITEM_ID',
                itemId: id
            });
        };

        let updateStoreFoundCode = (code) => {
            this.props.dispatch({
                type: 'UPDATE_FOUND_CODE',
                foundCode: code
            });
        };

        let updateStoreIdAndFoundCode = (itemId, code) => {
            updateStoreItemId(itemId);
            updateStoreFoundCode(code);
            this.props.history.push(`/submit-success`);
        };

        let addNewHint = (hint) => {
            let newHints = [...this.state.hints, hint]
            this.setState({hints: newHints}) 
        };

        let removeHint = (oldHint) => {
            let newHints = this.state.hints.filter(hint => hint.id !== oldHint.id);
            this.setState({hints: newHints});
        };

        let hideNoHintsMessage = () => this.setState({showNoHintsMessage: false});

        let submitForm = () => {
            if (this.state.hints.length === 0 ) {
                this.setState({showNoHintsMessage: true});
            } else {
                addItemFetch(this.state, this.props, updateStoreIdAndFoundCode);
            }
        };

        return (
            <div className="full-screen">
                <Header />
                <div className='screen center-div success-image-background'>
                    <form 
                    className='add-item-form'
                    onSubmit={event => {
                        event.preventDefault();
                        submitForm();
                    }}>
                        <div className='form-header center-div'>
                            <p className='form-title'>Hide New Item</p>
                        </div>
                        <hr/>
                        <div className='form-body'>
                            <div className='form-section'>
                                <p className='form-section-title'>Title</p>
                                <input 
                                    className='input-box'
                                    type='text'
                                    required
                                    maxLength='50'
                                    value={this.state.title}
                                    onChange={event => {
                                        this.setState({title: event.target.value})
                                    }}
                                />
                            </div>
                            <div className='form-section'>
                                <p className='form-section-title'>Location</p>
                                <select 
                                    className='input-box'
                                    value={this.state.location}
                                    onChange={event => {
                                        this.setState({location:event.target.value})
                                    }}>
                                    <option value='current'>Use Current Location</option>
                                    <option value='search'>Search By Location</option>
                                </select>
                                {this.state.location === 'current' ? <p></p> : 
                                <div className='add-item-search-box-wrapper'>
                                    <p className='form-text'>Enter Location:</p>
                                    <SearchBox />
                                </div>}
                            </div>
                            <div className='form-section'>
                                <p className='form-section-title'>Image/url</p>
                                <input 
                                    className='input-box'
                                    type='text'
                                    required
                                    maxLength='155'
                                    value={this.state.image}
                                    onChange={event => {
                                        this.setState({image: event.target.value})
                                    }}
                                />
                            </div>
                            <div className='form-section'>
                                <p className='form-section-title'>Hints</p>
                                <NewHintForm addNewHint={addNewHint} hideNoHintsMessage={hideNoHintsMessage}/>
                                {this.state.showNoHintsMessage 
                                    ? <p className='no-hints-message'>Please Provide a Hint!!!</p>
                                    : <HintListings hints={this.state.hints} removeHint={removeHint}/>
                                }
                            </div>
                        </div>
                        <hr/>
                        <div className='form-footer center-div'>
                            <button type='submit' className='submit-button'>Submit</button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    };
};

export default connect(
    state => ({lat: state.lat, lng: state.lng})
)(AddItemScreen);