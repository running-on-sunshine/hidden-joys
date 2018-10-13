import React from 'react';
import PlayDropDownMenuButton from './play-dropdown-menu-button';
import PlayDropDownMenuList from './play-dropdown-menu-list';

class PlayDropdownMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: false,
        }
    }

    render() {   
        let showMenu = () => {
            this.setState({ showMenu: true }, () => {
                document.addEventListener('click', closeMenu);
            });
        };

        let closeMenu = () => {
            this.setState({ showMenu: false }, () => {
                document.removeEventListener('click', closeMenu);
            });
        };

        return (
            <div className='play-dropdown-menu header-navigation-item'>
                <PlayDropDownMenuButton showMenu={showMenu} />
                { this.state.showMenu ? <PlayDropDownMenuList /> : null }
            </div>
        )
    };
};

export default PlayDropdownMenu;