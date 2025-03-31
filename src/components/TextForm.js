
import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleUpClick=()=>
  {

    let newtext=text.toUpperCase();
    setText(newtext);
    

  };
  const handleLowClick=()=>{
    let newt=text.toLowerCase();
    setText(newt);

  };
  const handleOnChange=(e)=>
    {
      
      setText(e.target.value);
      
  
    };
    const handleClear=()=>
      {
        setText("");
      }

    const handleCopy=()=>{
      let text=document.getElementById("exampleFormControlTextarea1");
      text.select();
      
      navigator.clipboard.writeText(text.value)
    }
    const handleExtraSpaces=()=>
    {
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "));
    }
  const [text, setText] = useState('');
  //setText("hey");
  return (
    <>
    <div className='container'>
      <h1><strong>{props.heading}</strong></h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className="btn btn-primary " onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-3" onClick={handleClear}>Clear</button>
      <button className="btn btn-primary mx-3" onClick={handleCopy}>Copy</button>
      <button className="btn btn-primary mx-3" onClick={handleExtraSpaces}>Extra Space Remover</button>
    </div>
    <div className='container my-3'>
      <h1>Your text summary</h1>
      <p>{(text.split(" ").length) } words and {text.length} characters</p>
      <p>{0.008 *(text.split(" ").length) } minutes</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"Enter something to preview here"}</p>
    </div>
    </>
  )
}
TextForm.propTypes={
heading:PropTypes.string
};
TextForm.defaultProps=
{
  heading:"Enter your text"
};
