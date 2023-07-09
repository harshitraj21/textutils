import React, { useState } from 'react'

export default function Textform(props) {
    const [text, setText] = useState("Enter the text here");
    const handleUpClick = () => {
        console.log(" UpperCase was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text has been converted to Upper Case", "success");
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text has been converted to Lower Case", "success");
    }

    const handleClear = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text has been removed successfully", "success");
    }

    const handleOnChange = (event) => {
        console.log("Onchange")
        setText(event.target.value)
    }

    const handleCopy = () => {
        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h3>{props.heading}</h3>
                <div className="mb-3">
                    <textarea className="form-control" value={text} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'light' ? '#042743' : 'white' }} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to uppercase</button>
                <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to lowercase</button>
                <button className='btn btn-primary mx-1' onClick={handleClear}>Clear Text</button>
                <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy text</button>
            </div >
            <div className="container" style={{ backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((element) => { return element.length !== 0 }).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element) => { return element.length !== 0 }).length} Minutes to read</p>
            </div>
            <h3>Preview</h3>
            {text}
        </>
    )
}
