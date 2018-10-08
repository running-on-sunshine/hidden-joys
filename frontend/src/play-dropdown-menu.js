import React from 'react';
import { NavLink } from 'react-router-dom';

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
                <div onClick={this.showMenu}>Let's play! <i className="fas fa-angle-down"></i>
                </div>

                { this.state.showMenu
                    ? (
                        <ul className="play-dropdown-menu-list">
                            <li className="dropdown-list-item">
                                <NavLink to="/search" className="dropdown-link">Search Joys</NavLink>
                             </li>
                            <li className="dropdown-list-item">
                                <NavLink to="/add" className="dropdown-link">Add Joy</NavLink>
                            </li>
                            <li className="dropdown-list-item">
                                <NavLink to="/found" className="dropdown-link">Found Joys</NavLink>
                            </li>
                        </ul>
                    )
                    : ( null ) 
                }
            </div>
        );
    }
}

export default PlayDropdownMenu;