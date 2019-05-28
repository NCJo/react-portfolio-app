import React, { Component } from 'react';


class ChatBot extends Component {
    state = { displayChatBot : false };


    toggleChatBot = () => {
        this.setState({ displayChatBot : !this.state.displayChatBot });
    }

    render() {
        return (
            <div>
            {
                this.state.displayChatBot ? (
                    <div>
                    <iframe 
                        src='https://webchat.botframework.com/embed/greatestqnabot?s=ZFcnp4pxVZU.2HONQZZvxmaP8oPZ3FWyw5xbaWjy-EISkKCatHTbAfg'
                        style={{ width: '70%', height: '500px' }}
                    ></iframe>
                    <div>    
                        <button
                            class='button'
                            onClick={this.toggleChatBot}
                        >Close</button>
                    </div>
                    </div>
                ) : (
                    <div>
                        <button
                            className={`button chat-button`}
                            onClick={this.toggleChatBot}
                        ><strong>Chat with Azure ChatBot!</strong></button>
                    </div>
                )
            }
            </div>
        
        )    
    }
    
}


export default ChatBot