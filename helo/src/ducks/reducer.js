let initialState = {
    username: '',
    password: '',
    pic: 'https://robohash.org/a.png'
};

const UPDATE_USER = 'UPDATE_USER';
const CLEAR_DATA = 'CLEAR_DATA';

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case UPDATE_USER:
            return Object.assign({}, state, {username: action.payload.username, password: action.payload.password, pic: action.payload.pic});
        case CLEAR_DATA:
            return Object.assign({}, state, {username: action.payload.username, password: action.payload.password, pic: action.payload.pic});
        default:
            return state;
    }
};

export function updateUser (username, password, pic) {
    return {
        type: UPDATE_USER,
        payload: {
            username,
            password,
            pic
        }
    }
};
export function clearData () {
    return {
        type: CLEAR_DATA,
        payload: {
            username: '',
            password: '',
            pic: 'https://robohash.org/a.png'
        }
    }
};