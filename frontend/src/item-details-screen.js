import React from 'react';
import Header from './header';
import Footer from './footer';

class ItemDetailScreen extends React.Component {
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
                <div className='screen'>
                    {this.state.item === 'Error' ? 
                        <div>BAD URL</div> :
                        <div className='form-container'>
                            <div className='add-item-form'>
                                <h3>{`Title: ${this.state.item.title}`}</h3>
                                <p>{`Location: Lat:${this.state.item.lat} / Lng: ${this.state.item.lng}`}</p>
                                <p>{`Image url: ${this.state.item.image}`}</p>
                                <p>{`Description: ${this.state.item.description}`}</p>
                            </div> 
                        </div>
                    }
                </div>
                <Footer />
            </div>
        )
    }
};

export default ItemDetailScreen;