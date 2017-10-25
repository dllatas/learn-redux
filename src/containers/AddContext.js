import React from 'react';
import { connect } from 'react-redux';
import { addContext } from '../actions';

let AddContext = ({ dispatch }) => {

    return (

        <div>
            <form 
                onSubmit = { e => {    
                    e.preventDefault()
                    
                    /*if (!input.value.trim()) {
                        return
                    }*/
                
                    dispatch(addContext('Macro economics'))
                    //input.value = ''
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