import React, { useState, useRef } from 'react';

export default function Formtext(props) {
    const [text, setText] = useState("");
    const inputRef = useRef(null);

    const handleUpperClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Converted to Upper Case!", "success");
        props.alertTimeOut();
    }

    const handleChangeClick = (event) => {
        setText(event.target.value);
    }

    const handleLowerClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lower Case!", "success");
        props.alertTimeOut();
    }

    const handleClearClick = () => {
        let newtext = "";
        setText(newtext);
        props.showAlert("Clear all text!", "success");
        props.alertTimeOut();
    }

    const handleInvertClick = () => {
        if (text.split(" ").length === 1) {
            setText(text.split("").reverse().join(""));
            props.showAlert("Converted to Invert text!", "success");
            props.alertTimeOut();
        }
        else {
            setText(text.replace(/\s+/g, "-").split("").reverse().join('').replace(/-/g, ' '));
            props.showAlert("Converted to Invert text!", "success");
            props.alertTimeOut();
        }

    }

    const handleRemoveSpace = () => {
        setText(text.replace(/\s+/g, '').trim());
        props.showAlert("Remove Space from the given text!", "success");
        props.alertTimeOut();
    }

    const handleCopyText = () => {
        inputRef.current.select();
        document.execCommand('copy');
        props.showAlert("Copied to Clipboard!", "success");
        props.alertTimeOut();
    }

    return (
        <div className='form-group' style={props.style}>
            <div className="container">
                <div className="contanier my-3">
                    <div className="mb-3">
                        <div className="row">
                            <h1 className="col-md-9">{props.heading}</h1>
                        </div>
                        <label htmlFor="textAreaBox" className="form-label"></label>
                        <textarea className="form-control" id="textAreaBox" rows="3" ref={inputRef} value={text} onChange={handleChangeClick} placeholder='Enter the text here'></textarea>
                        <button className="btn btn-primary btn-sm my-3 mx-1" onClick={handleUpperClick}>Convert to Uppercase</button>
                        <button className="btn btn-primary btn-sm my-3 mx-1" onClick={handleLowerClick}>Convert to Lowercase</button>
                        <button className="btn btn-primary btn-sm my-3 mx-1" onClick={handleClearClick}>Clear Text</button>
                        <button className="btn btn-primary btn-sm my-3 mx-1" onClick={handleInvertClick}>Invert Text</button>
                        <button className="btn btn-primary btn-sm my-3 mx-1" onClick={handleRemoveSpace}>Remove Space</button>
                        <button className="btn btn-primary btn-sm my-3 mx-1" onClick={handleCopyText}>Copy Text</button>
                    </div>
                </div>
                <div className="contanier my-3">
                    <h2>Text Summary</h2>
                    <p>Total words : {text.trim() === '' ? 0 : text.trim().split(/\s+/).length}</p>
                    <p>Total space : {text.split(" ").length - 1}</p>
                    <p>Total character : {text.length}</p>
                    <p>Text : {text}</p>
                </div>
            </div>
        </div>
    )
}
