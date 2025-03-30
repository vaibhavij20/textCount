
import React from 'react'
import { useState } from 'react';
import PropTypes from 'prop-types'

export default function TextForm(props) {
  const handleUpClick=()=>
  {

    let newtext=text.toUpperCase();
    setText(newtext);
    

  };
  const handleOnChange=(e)=>
    {
      
      setText(e.target.value);
      
  
    };
  const [text, setText] = useState('Enter text here');
  //setText("hey");
  return (
    <>
    <div className='container'>
      <h1><strong>{props.heading}</strong></h1>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
    <div className='container my-3'>
      <h1>Your text summary</h1>
      <p>{(text.split(" ").length) } words and {text.length} characters</p>
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
