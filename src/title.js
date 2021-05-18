import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>CGU List</h1>
        </header>
    )
}

const headerStyle = {
    
    color: 'black',
    textAlign: 'center',
    padding: '10px'
}


export default Header;