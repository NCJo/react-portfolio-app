import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
    const { Component } = props;

    const style ={
        display: 'inline-block',
        margin: 10,
        marginBottom: 30
    };

    return (
        <div>
            <div>
                <h3 style={style}><Link to='/'>Home</Link></h3>
                {/* <h3 style={style}><Link to='/jokes'>Tell Me a Joke</Link></h3> */}
                <h3 style={style}><Link to='/music-guru'>Music-Guru</Link></h3>
                {/* <h3 style={style}><Link to='/evens-or-odds'>Even or Odds?</Link></h3> */}
                <h3 style={style}><Link to='/reaction'>Reaction Chat</Link></h3>
                {/* <h3 style={style}><Link to='/interview'>Interview</Link></h3> */}

            </div>
            {props.children}
        </div>
    )
}

export default Header;