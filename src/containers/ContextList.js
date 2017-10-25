import { connect } from 'react-redux'
//import { toggleTodo } from '../actions'
import ContextList from '../components/ContextList'

const getContexts = (state, filter) => {
    
    switch (filter) {
        case 'SHOW_ALL':
            return state.context;
        default:
            throw new Error('Unknown filter: ' + filter)
    }

}

const mapStateToProps = (state) => ({
    context: getContexts(state, 'SHOW_ALL')
})


/*const mapDispatchToProps = {
  onTodoClick: toggleTodo
}*/

const connectedContextList = connect(
  mapStateToProps
)(ContextList)

export default connectedContextList