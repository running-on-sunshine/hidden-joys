import React from 'react';

let PlayDropDownMenuButton = (props) =>
    <div
        onClick={event => {
            event.preventDefault();
            props.showMenu();
        }}>
            Let's play! <i className="fas fa-angle-down" />
    </div>

export default PlayDropDownMenuButton;