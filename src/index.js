import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import App from './components/App';
import Jokes from './components/Jokes';
import Interview from './components/Interview';
import Crometrics from './components/Crometrics';
import Header from './components/Header';
import Elephant from './components/Elephant';
import './index.css';

import MusicGuru from './projects/music-guru';
import EvensOrOdds from './projects/even-or-odds';
import Reaction from './projects/reaction';


// ReactDOM.render(<App />, document.getElementById('root'));

const history = createBrowserHistory();

ReactDOM.render(
    <Router history={history}>
        <Switch>
            <Route exact={true} path='/' render={() => <Header><App /></Header>} />
            <Route path='/jokes' render={() => <Header><Jokes /></Header>} />
            <Route path='/music-guru' render={() => <Header><MusicGuru /></Header>} />
            <Route path='/evens-or-odds' render={() => <Header><EvensOrOdds /></Header>} />
            <Route path='/reaction' render={() => <Header><Reaction /></Header>} />
            {/* <Route path='/interview' render={() => <Header><Interview /></Header>} /> */}
            <Route path='/interview' render={() => <Interview />} />
            <Route path='/sample' render={() => <Crometrics />} />
            <Route path='/colorelephant' render={()=> <Header><Elephant /></Header>} />


        </Switch>
    </Router>,
    document.getElementById('root')
);


//Promises
// new Promise((resolve, reject) => {
//     return reject(new Error('No Bear'));

//     setTimeout(() => {
//         resolve('Bear, beets, battlestar');
//     }, 2000);
// })
// .then(quote => {
//     console.log(quote)
// })
// .catch(error => console.log('error', error));
