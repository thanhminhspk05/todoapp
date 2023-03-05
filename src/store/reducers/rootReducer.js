const initState = {
    users: [
        { id: 1, name: 'Python' },
        { id: 2, name: 'C++' },
        { id: 3, name: 'Javascript' },
        { id: 4, name: 'PHP' },
    ],
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('run into delete user', action);
            let users = state.users;
            users = users.filter((item) => item.id !== action.payload.id);
            console.log(users);
            console.log(state);
            return {
                ...state,
                users,
            };
        default:
        // code block
    }
    return state;
};

export default rootReducer;
