import React, { Component } from 'react';

const TITLES = [
    'a Software Engineer',
    'a Full Stack Engineer',
    'a Web Crawler Specialist',
    'a Music Lover',
    'an Enthusiastic Learner',
    'a Copy Writer',
    'a Photographer',
];

class Title extends Component {
    state = { titleIndex: 0, fadeIn: true };

    componentDidMount() {
        this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);

        this.animateTitles();
    }

    componentWillUnmount() {  
        // prevents memory leaks
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex: titleIndex, fadeIn: true });

            this.timeout = setTimeout(() => this.setState({ fadeIn: false }), 2000);
            
        },  4000);
    }

    render() {
        const {fadeIn, titleIndex} = this.state;
        
        // before refractor
        // const title = TITLES[this.state.titleIndex];

        const title = TITLES[titleIndex];


        return (
            <h4 
            className={fadeIn ? "title-fade-in" : "title-fade-out"}
            style={{color: '#ff8484'}}
            >I am {title}</h4>
        )
    }
}

export default Title;