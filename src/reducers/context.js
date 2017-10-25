const context = (state, action) => {

    if (!state) {
        return ['social', 'environment']
    }

    switch (action.type) {
        
        case 'ADD_CONTEXT':
            
            /*
            return {
                ...state,
                name: action.context
            };
            */
            return [ ...state, action.context]

        default:
            return state;
    }
};

export default context