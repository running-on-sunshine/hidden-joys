import React from 'react';
import { Link } from 'react-router-dom';

class PlayDropdownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    };

    showMenu(event) {
        event.preventDefault();
        this.setState({ showMenu: true }, () => {
            document.addEventListener('click', this.closeMenu);
        });
    }

    closeMenu() {
        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });
    }

    render() {
        return (
            <div className="play-dropdown-menu nav-item">
                <div onClick={this.showMenu}>Let's play!</div>

                { this.state.showMenu
                    ? (
                        <ul className="play-dropdown-menu-list">
                            <Link to="/search" className="nav-item"> 
                                <li>Search Joys</li>
                            </Link>
                            <Link to="/add" className="nav-item"> 
                                <li>Add Joy</li>
                            </Link>
                        </ul>
                    )
                    : ( null ) 
                }
            </div>
        );
    }
}

export default PlayDropdownMenu;