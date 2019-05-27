import React from 'react';
import { connect } from 'react-redux';
import { setUsername } from '../actions/username';

const SetUsername = ({ setUsername }) => {
    if (event) {
        console.log('username is:', event.target.value);
    }
    
    return (
        <div>
        <h3>username</h3>
        <input onChange={setUsername} />
        </div>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        setUsername: event => dispatch(setUsername(event.target.value))
    }
}

// mapStateToProps = null (no need to read store)
// mapDispatchToProps = setUserName (action creator)
export default connect(null, mapDispatchToProps)(SetUsername);