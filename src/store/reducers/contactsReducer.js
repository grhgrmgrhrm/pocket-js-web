import * as Constants from '../constants';

import ContactsAPI from './contactsStub'

let contacts = ContactsAPI.all();

const initialState = {
    contacts: [],
    activeContact: null,
    is_loading_contacts: false
}

export function contactsReducer(state = initialState, action) {
    switch (action.type) {
        case Constants.GET_CONTACTS_PENDING: {
            state = {...state, is_loading_contacts: true};
        break;
        }

        case Constants.GET_CONTACTS_FULFILLED: {
            state = {
                //...state, 
                contacts, //for testing
                is_loading_contacts: false,
                //contacts: action.payload.data //commented for testing
            };
        break;
        }

        case Constants.GET_CONTACTS_REJECTED: {
            state = {
                contacts,
                is_loading_contacts: false,
                error_message: action.payload.message};
        break;
        }
        
        default: {state = {...state}}
    }
    return state;
}