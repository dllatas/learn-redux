import { combineReducers } from 'redux';
import context from './context';
import { selectedSubreddit, postsBySubreddit }  from './reddit';

const reducer = combineReducers({
    context,
    selectedSubreddit,
    postsBySubreddit
});

export default reducer