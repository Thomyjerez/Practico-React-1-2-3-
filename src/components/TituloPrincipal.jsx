import React from 'react';
import { useState } from 'react';

const TituloPrincipal = (props) => {
    const [frase, setFrase] = useState('')

    const mensaje = ()=>{
        // console.log('from changed state')
        setFrase( '(from changed state)')
    }

    return (
        <div> 
        <h1>Hello {props.msjInsertado}{frase}</h1>
        <button onClick={mensaje}>Click me</button>
        </div>    
    );
};

export default TituloPrincipal;