import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import Title from './Title';
import ChatBot from './ChatBot';

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
                <h1>Hi!</h1>
                <p>I'm Jed — working remotely on projects for clients all over the world.</p>
                {/* {this.state.displayBio ? <Title /> : null } */}
                <Title />
                <p>I have a diverge set of skills, ranging from Python, to Django, all the way to React + Redux and Vue.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I'm a freelancer based in Cary and Denver.</p>
                            <p>Python is love, javascript is life.</p>
                            <p>A skateboard Enthusiast.</p>
                            <button 
                                class='myButton'
                                onClick={this.toggleDisplayBio}>Show Less
                            </button>
                        </div>
                    ) : (
                        <div>
                            <button 
                                class='myButton'
                                onClick={this.toggleDisplayBio}>Read More
                            </button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <ChatBot />
                <hr />
                <SocialProfiles />
                
            </div>
        )
    }
}


export default App;