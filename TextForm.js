// SHORTCUT KEY 
// rfc -> React Functional Component 
// imr -> import react from react 
// impt -> Importing Proptypes from Prop-Types

import React, { useState } from 'react'


export default function TextForm(props) {
    // With the help of this function the value of only state variable can be changed 
    // but user cannot enter any data so if user wants to enter the data along with setText then we will use 
    // on change method
    const handleUpClick = () => {
        // console.log("Uppercase was Clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleLoClick = () => {
        // console.log("Uppercase was Clicked")
        let newText = text.toLowerCase();
        setText(newText)
    }

    const ClearOnlick = () => {
        let newText = "";
        setText(newText)
    }

    const alternatingClick = () => {
        let newText = "";
        for (let index = 0; index < text.length; index++) {
            if ((index % 2) === 0) {
                newText += text[index].toLowerCase();
            }
            else {
                newText += text[index].toUpperCase();
            }

        }
        setText(newText);
    }


    const copyText = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard:', text);
            })
            .catch((error) => {
                console.error('Failed to copy text:', error);
            });
    };

    // Learn this method as with the help of this method only we can change the Text 
    const handleOnChange = (event) => {
        // console.log("On Click")
        setText(event.target.value);
    }


    const [text, setText] = useState("");

    // Wrong way of changing the Text 
    // text = "Hello"z
    // Correct way of changing the Text 
    // setText("My First React Project")

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.title}</h1>
                <div className="mb-3">
                    {/* // Here we are changing the Bg color as well TextArea Text color accordingly same or opposite to Mode of Page respectively */}
                    <textarea className="form-control" value={text} style={{
                        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7">

                    </textarea>
                    <button className='btn btn-primary my-2' onClick={handleUpClick}>
                        Convert To Uppercase
                    </button>
                    <button className='btn btn-primary mx-2 ' onClick={handleLoClick}>
                        Convert To Lowercase
                    </button>
                    <button className='btn btn-primary mx-2 ' onClick={ClearOnlick}>
                        Clear
                    </button>
                    <button className='btn btn-primary mx-2 ' onClick={copyText}>
                        Copy Text
                    </button>
                    <button className='btn btn-primary mx-2 ' onClick={alternatingClick}>
                        Change Alternate Case
                    </button>

                </div>
            </div>

            <div className="container my-4" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h3>Your Text Summary</h3>
                <p>{text.split(' ').filter((x) => x !== '').length} words and {text.length} characters</p>
                <p>Average time to read(in Seconds) : {0.3 * text.split(' ').filter((x) => x !== '').length}
                </p>

                <h3>Preview</h3>
                <p>{text.length > 0 ? text : "Enter Something In The Text Box To Preview It..."}</p>
            </div>

        </>
    )
}
