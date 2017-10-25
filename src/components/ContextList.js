import React from 'react';
import Context from './Context'

const ContextList = ( { context } ) => (
    <ul>
        {   
            context.map( (c, i) => <Context key = { i } text = { c } /> )
        }
    </ul>
)

export default ContextList;