import React, { Component } from 'react';

// More APIs: toddmotto public apis

const Joke = props => {
    const { setup, punchline } = props.joke;
    return <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>;
}
// Refractor version
// const Joke = ({  joke: { setup, punchline} }) => (
//     <p style={{ margin: 20 }}>{setup} <em>{punchline}</em></p>
// )

export default class Jokes extends Component {
    state = { joke: {}, jokes: [], index: 0 };

    componentDidMount() {
        fetch('https://official-joke-api.appspot.com/random_joke')
            // Check response in browser
            // .then(response => console.log('response', response))

            // This is equal to .then(response => response.json())
            .then(response => { return response.json() })
            // .then(json => console.log(json));
            .then(json => this.setState({ joke: json }))
            .catch(error => alert(error.message));
    }

    fetchJokes = () => {
        fetch('https://official-joke-api.appspot.com/random_ten')
        .then(response => response.json())
        .then(json => this.setState({ jokes: json }))
        .catch(error => alert(error.message));
    }

    render() {
        const { setup, punchline } = this.state.joke;
        
        

        return (
            <div>
                <h2>Highlighted Joke</h2>
                <Joke joke={this.state.joke}/>
                <h3>Want ten new jokes?</h3>
                <button onClick={this.fetchJokes}>Click Me!</button>
                {
                    this.state.jokes.map(joke => {
                        {/* Before refractor */}
                        {/* const { id, setup, punchline } = joke;
                        return <p key={id}>{setup} <em>{punchline}</em></p> */}

                        {/* After refractor */}
                        return <Joke key={joke.id} joke={joke} />
                    })
                }
           </div>
        )
    }
}