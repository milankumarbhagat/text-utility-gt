import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState(props?.inputText ?? 'Enter your text here');
    const countWords = (str) => {
        return str.split(" ").length;
    }
    const convertToUpper = () => {
        setText(text.toUpperCase());
    }

    const convertToLower = () => {
        setText(text.toLowerCase());
    }
    const onChangeHandle = (event) => {
        setText(event.target.value);
    }

    const clear = () => {
        setText("");
    }

    const copy = () => {
        const str = document.getElementById('myBox');
        str.select();
        navigator.clipboard.writeText(str.value);
    }

    return (
        <>
            <div className="container" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>{props.title} {props.dashboard ? 'Dashboard': ''}</h1>
                <div className="mb-3">
                    <textarea style={{backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}} onChange={onChangeHandle} value={text} id="myBox" cols="80" rows="10" />
                </div>
                <button className="btn btn-success mx-1" onClick={convertToUpper}>Uppercase</button>
                <button className="btn btn-primary mx-3" onClick={convertToLower}>Lowercase</button>
                <button className="btn btn-danger mx-3" onClick={clear}>Clear Text</button>
                <button className="btn btn-success mx-3" onClick={copy}>Copy <i className="fa fa-copy"></i></button>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Summary</h1>
                <p>Words: {countWords(text)}, Characters: {text.length}</p>
                <p>Minimum Read Time: {countWords(text) * (1 / 125)} mins</p>
                <h3>Preview: </h3>
                <p>{text.length > 0 ? text : 'Enter something to preview'}</p>
            </div>
        </>
    )
}
