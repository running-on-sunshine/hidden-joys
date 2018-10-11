import React from 'react';
import Header from './header';
import Footer from './footer';
import ImageLinkErrorMessage from './item-details-screen/image-link-error-message';
import './stylesheets/item-details-screen.css';

class ItemDetailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlId: '',
            item: ''
        };
    };

    componentDidMount() {
        let urlId = this.props.match.params.id;
        fetch(`${process.env.REACT_APP_API_URL}/items/${urlId}`)
        .then(res => res.json())
        .then(data => {
            this.setState({item: data.data});
            this.setState({urlId: urlId});
        })
    };

    render() {
        return (
            <div className='full-screen'>
                <Header />
                <div className='screen success-image-background'>
                    {this.state.item === 'Error' ? 
                        <ImageLinkErrorMessage />:
                        <div className='form-container'>
                            <div className='add-item-form'>
                                <h3 className='form-title'>{`${this.state.item.title}`}</h3>
                                <p className='form-text'>{`Location: Lat:${this.state.item.lat} / Lng: ${this.state.item.lng}`}</p>
                                <div className='form-section map-detail-container'>
                                    <div>Map goes here</div>
                                </div>
                                <div className='form-section image-container'>
                                    <p className='form-text'>Image</p>
                                    <p className='item-image'>{`${this.state.item.image}`}</p>
                                </div>
                                <div className='form-section hints-container'>
                                    <p className='form-text'>Hints</p>
                                    <p className='form-text'>{`${this.state.item.description}`}</p>
                                </div>
                            </div> 
                        </div>
                    }
                </div>
                <Footer />
            </div>
        )
    }
};

export default ItemDetailsScreen;