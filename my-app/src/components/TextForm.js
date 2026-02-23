import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("uppercase was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText);
        
    }
    const handleLoClick = () => {

        let newText = text.toLowerCase();
        setText(newText);
        
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        
    }
    const handleRemoveClick = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        
    }
    const handleRemoveSyClick = () => {
        let newText = text.split(/[+*%#@!&$]+/);
        setText(newText.join(" "));
        
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);

        
    }
    const handleOnChange = (event) => {
        // console.log("OnChaged ")
        setText(event.target.value);
    }
    const [text, setText] = useState("");
    // setText("new text")
  return (
    <>
    <div className="container my-3" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
        <h1>{props.heading}</h1>
        <div >
        <label htmlFor="myBox" className="form-label">Enter your text below</label>
        <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'light' ? 'white' : '#3b3b3d', color: props.mode === 'light' ? 'black' : 'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-2 mx-2" onClick={handleUpClick}>Convert to UPPERCASE</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleLoClick}>Convert to lowercase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleRemoveClick}>Remove Extra Space</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleRemoveSyClick}>Remove Symbol</button>
        <button className="btn btn-primary my-2 mx-2"  onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClearClick}>Clear Text</button>
    </div>    
    <div className="container" style={{color: props.mode === 'light' ? 'black' : 'white'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.length} Minutes read </p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
