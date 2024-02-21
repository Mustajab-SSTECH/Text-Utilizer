import React from 'react';
// import Formtext from './Formtext.js';

export default function Alert(props) {
    const capitalize = (word) => {
        let lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        <div style={{ height: '50px', backgroundColor: props.style.backgroundColor }}>
            {
                props.alert &&
                <div className={`alert alert-${props.alert.type} alert-dismissible fade show m-0`} role="alert">
                    <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                </div>
            }
        </div >
    )
}
