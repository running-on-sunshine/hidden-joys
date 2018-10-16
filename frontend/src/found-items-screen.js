import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import Footer from './footer';
import findItemFetch from './found-items-screen/find-item-fetch';
import ItemDescriptionButton from './item-description-button';
import './stylesheets/found-items-screen.css';

class FoundItemsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id: '',
            message: '',
            foundCode: '',
            alreadyFound: false
        }
    }

    render() {
        let invalidFoundCode = () => {
            this.setState({ foundCode: '' });
            this.setState({alreadyFound: false});
            this.setState({ message: 'Invalid Id' });
        };

        let clearMessage = () =>
            this.setState({ message: '' });

        let updateItemId = (id) => {
            this.props.dispatch({
                type: 'UPDATE_ITEM_ID',
                itemId: id
            });
            this.props.history.push(`/found-success`);
        };

        let itemAlreadyFound = (itemId) => {
            this.setState({alreadyFound: true});
            this.props.dispatch({
                type: 'UPDATE_ITEM_ID',
                itemId: itemId
            });
            this.setState({foundCode: ''});
        };

        return (
            <div className="full-screen">
                <Header />
                <div className="screen center-div success-image-background">
                    <form 
                        className="found-items-form"
                        onSubmit={event => {
                            event.preventDefault();
                            findItemFetch(this.state.foundCode, invalidFoundCode, clearMessage, updateItemId, itemAlreadyFound);
                    }}>
                        <div className='center-div'>
                            <p className='form-title found-title'>Did you find some joy? <i className="far fa-smile-wink"></i></p>
                        </div>
                        <div className='found-items-form-body'>
                            <div className='form-section'>
                                <p className='form-text'>Wooo! That's super awesome!</p>
                                <p className='form-text'>To mark your piece of joy as found, find the id attached to your joy and enter it below.</p>
                            </div>
                            <div className='found-items-form-section'>
                                <p className='form-section-title'>Enter joy id:</p>
                                <div className='search-id-form-section'>
                                    <input 
                                        className='search-id-input-box'
                                        required
                                        type='text'
                                        value={this.state.foundCode}
                                        onChange={event => {
                                            this.setState({foundCode: event.target.value})
                                        }} 
                                    />
                                    <button 
                                        className='form-button search-items-button' 
                                        type="submit">Found!
                                    </button>
                                </div>
                            </div>
                            <div className='form-section'>
                                {this.state.alreadyFound
                                    ? <div className='form-section already-found-container'>
                                        <p className='form-section-title'>Item has already been found!</p>
                                        <ItemDescriptionButton id={this.props.itemId}/>
                                    </div>
                                    : <p className='form-section-title'>{this.state.message}</p>
                                }
                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    };
};

export default connect(
    state => ({ itemId: state.itemId, foundCode: state.foundCode })
)(FoundItemsScreen);