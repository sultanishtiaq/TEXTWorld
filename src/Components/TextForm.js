import React,{useState} from 'react'

export default function TextForm (props){
    const handleUpClick = ()=>{
        
        console.log("Uppercase Was Clicked")
        let NewText = text.toUpperCase();
        setText(NewText)
        props.showAlert(": Converted To Uppercase Successfully!","success")
    }
    const handlelowClick = ()=>{
        console.log("Lowercase Was Clicked")
        let NewText = text.toLowerCase();
        setText(NewText)
        props.showAlert(": Converted To Lowercase Successfully!","success")


    }
    const handleCopyClick = ()=>{
        console.log("Text Copied Successfully")
       let text = document.getElementById("Text")
       text.select();
       navigator.clipboard.writeText(text.value)
       props.showAlert(": Copied to ClipBoard!","success")

    }
    const handleClearClick = ()=>{
        console.log("Text Cleared Successfully")
        let NewText = "";
        setText(NewText)
        props.showAlert(": Text Cleared Successfully!","success")


    }
    const handleOnChange = (event)=>{
        console.log("On Change")
        setText(event.target.value)

    }
    const handleRemoveExtraSpacesClick = ()=>{
        console.log("On Change")
        let NewText = text.split(/[ ]+/)
        setText(NewText.join(" "))
        props.showAlert(": Removed Extra Space Successfully!","success")


    }

    const [text,setText] = useState('');

    return(
        <>

    <div className="Container  mb-3" style={{backgroundColor : props.mode==="dark"?'grey':'white',color : props.mode==="light"?'black':'white'}}>
        <h1>{props.heading}</h1>
    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==="dark"?'grey':'white', color : props.mode==="light"?'black':'white'}}   id="Text"  rows="8"></textarea>
    <button className='btn btn-primary my-4 mx-2'  onClick={handleUpClick}>Convert to Uppercase</button>
    <button className='btn btn-primary my-4 mx-2' onClick={handlelowClick}>Convert to lowercase</button>
    <button className='btn btn-primary my-4 mx-2' onClick={handleCopyClick}>Copy</button>
    <button className='btn btn-primary my-4 mx-2' onClick={handleClearClick}>Clear Text</button>
    <button className='btn btn-primary my-4 mx-2' onClick={handleRemoveExtraSpacesClick}>Remove Extra Spaces</button>
    </div>
    <div className="container1" style={{backgroundColor : props.mode==="dark"?'grey':'white',color : props.mode==="light"?'black':'white'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} Words and {text.length} Characters</p>
    <p>{0.008 * text.split(" ").length} Minutes reading Time</p>
    <h2>PREVIEW</h2>
    <p>{text}</p>



    </div>
    </>
    )
} 