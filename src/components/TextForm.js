import { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase Button Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleOnChange = (event) => {
        // console.log("OnChange Working");
        setText(event.target.value)
    }

    const [text, setText] = useState("Enter Text Here");
    return (
        <div>
            <h1 className="mt-5">{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn-primary ms-1" onClick={handleDownClick}>Convert to Lowercase</button>
        </div>
    )
}
