import React,{useState} from 'react'


function Form(){
  const handleUpClick = () =>{
    // console.log("Uppercase was clicked");
    // setText("dhruvi");
    // text.toUpperCase();
    // text.toLowerCase();
    // setText(text.toUpperCase());
  }
  const handleshClick = () =>{
    // console.log("Uppercase was clicked");
     
  }
  
  const handleOnChange = (event) =>{
  //   console.log("On change");
    setText(event.target.value);
  }
  const [text,setText] = useState('Enter the text');
  // setText("new Enter");
    return(
<>
<div className=" container mb-3 mt-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
  {/* <textarea className="form-control" id="exampleFormControlTextarea1"></textarea> */}
  {/* <button type="submit" className="btn btn-primary mt-3">Change The Taxt</button> */}
  <textarea className="form-control" value={text} id="exampleFormControlTextarea1" onChange={handleOnChange}></textarea>
  <button type="submit" className="btn btn-primary mt-3" onClick={handleUpClick}>Change The Taxt</button>
</div>

<div className="container">
  <h1>Your Text summary</h1>
  <p>{text.split(" ").length} Word and {text.length} Characters </p>
  <p>{0.008 * text.split(" ").length }  read to the only one word </p>
  <h2>Previwe</h2>
  <button type="submit" className="btn btn-primary mt-3" onClick={handleshClick}>Preview</button>
  <p>{text}</p>
</div>
</>
    );
}
export default Form;