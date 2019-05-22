import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';

import profile from '../assets/profile.png';


class App extends Component {
    state = { displayBio : false };

    // constructor() {
    //     super();
    //     this.state = { displayBio: false };
    //     console.log('constructor this', this);

    //     this.toggleDisplayBio = this.toggleDisplayBio.bind(this);
       
    // }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() { 
        return (
            <div>
                <img src={profile} className='profile' />
                <h1>Yo</h1>
                <p>The name is X.</p>
                {/* {this.state.displayBio ? <Title /> : null } */}
                <Title />
                <p>I'm always looking forward to tackle any challenge.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in NC.</p>
                            <p>My favorite language is Python, but ReactJS is also badass.</p>
                            <p>A skateboard Enthusiast.</p>
                            <button onClick={this.toggleDisplayBio}>Show Less</button>
                        </div>
                    ) : (
                        <div>
                            <button onClick={this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
                
            </div>
        )
    }
}


export default App;