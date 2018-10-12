import React from 'react';
import Header from './header';
import Footer from './footer';
import ImageLinkErrorMessage from './item-details-screen/image-link-error-message';
import ItemDetailScreenMapContainer from './item-details-screen/item-detail-map';
import ItemDetailsForm from './item-details-screen/item-details-form';
import './stylesheets/item-details-screen.css';

class ItemDetailsScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            urlId: '',
            item: '',
            hints: []
        };
    };

    componentDidMount() {
        let urlId = this.props.match.params.id;
        fetch(`${process.env.REACT_APP_API_URL}/items/${urlId}`)
        .then(res => res.json())
        .then(data => {
            this.setState({item: data.data});
            this.setState({urlId: urlId});
            fetch(`${process.env.REACT_APP_API_URL}/items/${urlId}/hints`)
            .then(res => res.json())
            .then(data => this.setState({hints: data.data}))
        })
    };

    render() {
        return (
            <div className='full-screen'>
                <Header />
                <div className='screen success-image-background center-div'>
                    {this.state.item === 'Error' ? 
                        <ImageLinkErrorMessage />:
                        <div className='item-details-container'>
                            <div className='desktop-map-display'>
                                <ItemDetailScreenMapContainer lat={this.state.item.lat} lng={this.state.item.lng}/>
                            </div>
                            <ItemDetailsForm item={this.state.item} hints={this.state.hints}/>
                        </div>
                    }
                </div>
                <Footer />
            </div>
        )
    }
};

export default ItemDetailsScreen;