const loggedReducer = (state = false /*initial state*/, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
}

export default loggedReducer;