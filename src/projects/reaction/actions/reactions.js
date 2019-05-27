import uuid from 'uuid/v4';

// Type is dynamic because many types of emoji
export const createReaction = ({ type, emoji, username, messageId }) => {
    return { 
        type,
        item: { 
                id: uuid, 
                timestamp: Date.now,
                emoji,
                username,
                messageId
            },

    };
}