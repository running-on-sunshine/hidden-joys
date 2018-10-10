import React from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import ItemInfoWindowContent from './item-info-window';

class ItemMarker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            activeMarker: this.props.activeMarker
        }
    }
    toggleOpen = () => {
        this.setState({isOpen: !this.state.isOpen}, () => {
            if (!this.state.isOpen) {
                this.setState({activeMarker: false}, () => {
                    this.props.closeMarkers(null)
                })
            } else {
                this.props.closeMarkers(this.props.itemId)
            }
        })
    };
    componentWillReceiveProps(nextProps) {
        this.setState({activeMarker: nextProps.activeMarker})
    };
    render() {
        return (
            <div>
                <Marker
                    onClick={this.toggleOpen}
                    position={this.props.location}
                >
                { this.state.isOpen && this.state.activeMarker ?
                    <InfoWindow maxWidth={800} maxHeigth={800} defaultPosition={ this.props.location } onCloseClick={this.props.onToggleOpen}>
                        <ItemInfoWindowContent item={this.props.item}/>
                    </InfoWindow> : null
                }
                </Marker>
            </div>
        )
    }
};

export default ItemMarker;