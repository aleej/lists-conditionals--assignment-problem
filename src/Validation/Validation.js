import React from 'react';

const Validation = (inputlength) => {
    console.log(inputlength.someOtherValue)
    if ( inputlength.inputlength < 5 ){
        return <div><p>Text too short!</p></div>
    } else {
        return <div>Text long enough!</div>
    }
}

export default Validation;