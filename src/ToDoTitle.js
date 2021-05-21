import React from 'react';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TODO List</h1>
        </header>
    )
}

const headerStyle = {
    
    color: 'white',
    background:'#2894FF',
    width:'160px'
}


export default Header;