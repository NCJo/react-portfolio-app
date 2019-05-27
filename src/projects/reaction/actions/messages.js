import { NEW_MESSAGE } from './types';
import uuid from 'uuid/v4';

// To guaranteed that every id is unique, use uuid
export const newMessage = ({ text, username }) => ({
    type: NEW_MESSAGE,
    item: { id: uuid(), timestamp: Date.now(), text, username }
});