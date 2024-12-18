import React, { useState } from 'react';

function Form() {
  const [text, setText] = useState('Enter the text');
  const [showPreview, setShowPreview] = useState(false); // State to control visibility of the preview

  const handleUpClick = () => {
    // Example functionality for uppercase (optional implementation)
    setText(text.toUpperCase());
  };

  const handleshClick = () => {
    setShowPreview(!showPreview); // Toggle the visibility of the preview
    console.log("Preview Button Clicked  =  " + showPreview);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container mb-3 mt-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
        <textarea
          className="form-control"
          value={text}
          id="exampleFormControlTextarea1"
          onChange={handleOnChange}
        ></textarea>
        <button type="submit" className="btn btn-primary mt-3" onClick={handleUpClick}>
          Change The Text
        </button>
      </div>

      <div className="container">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <button type="submit" className="btn btn-primary mt-3" onClick={handleshClick}>
          Preview
        </button>
        {showPreview && <p>{text}</p>} {/* Conditionally render the paragraph */}
      </div>
    </>
  );
}

export default Form;
