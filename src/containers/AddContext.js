import React from 'react';
import { connect } from 'react-redux';
import { addContext/*, fetchPosts*/ } from '../actions';

let AddContext = ({ dispatch }) => {

    return (

        <div>
            <form 
                onSubmit = { e => {
                    e.preventDefault();
                    
                    /*if (!input.value.trim()) {
                        return
                    }*/
                
                    dispatch(addContext('Macro economics'));
                    //input.value = ''
                    /*dispatch(fetchPosts('reactjs'))
                        .then(() => console.log(props.store.getState()));*/
                }}
            >
            <button type="submit">Add Context</button>
            </form>
        </div>
    )
}

//<input ref= { node => { input = node }} />

AddContext = connect()(AddContext)

export default AddContext