import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

import { newMessage } from './actions/messages';

import App from './components/App';
import './index.css';
import PubSub, { PubSubContext } from './pubsub';


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store.getState()', store.getState()));

const pubsub = new PubSub();

pubsub.addListener({
    message: messageObject => {
        const { message, channel } = messageObject;
        console.log('Received message:', message, 'channel:', channel);

        store.dispatch(message);
    }
})

setTimeout(() => {
    pubsub.publish(newMessage({ text: 'HELLO WORLD!', username: 'Bot James' }))
}, 1000);

const Reaction = () => {
    return (
        <Provider store={store}>
            <PubSubContext.Provider value={{ pubsub }}>
                <App />
            </PubSubContext.Provider>
        </Provider>
    )
};

export default Reaction



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
