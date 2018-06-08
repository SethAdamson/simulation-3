let initialState = {
    id: 0,
    username: '',
    password: '',
    pic: 'https://robohash.org/a.png'
};

const UPDATE_USER = 'UPDATE_USER';

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case UPDATE_USER:
            return Object.assign({}, state, {id: action.payload.id, username: action.payload.username, password: action.payload.password, pic: action.payload.pic})
        default:
            return state;
    }
};

export function updateUser (id, username, password, pic) {
    return {
        type: UPDATE_USER,
        payload: {
            id,
            username,
            password,
            pic
        }
    }
};