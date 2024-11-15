import React, { useState } from 'react'



export default function TextConverter(props) {
    const [text, setText] = useState('');
    // const[boldText, setBoldText] = useState('');



    const handleChange = (e) => {
        setText(e.target.value);
    }

    const convertToLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText)
    };

    const convertToUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText)
        // props.showAlert("Converted to upperCase", "success")
    };

    const convertToSentenceCase = () => {
        const convertedText = text.toLowerCase();
        const sentenceCaseText = convertedText.charAt(0).toUpperCase() + convertedText.slice(1);
        setText(sentenceCaseText);
    };

    const convertToAlternatingCase = () => {
        const convertedText = text.split('').map((char, index) => {
            return index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        }).join('');
        setText(convertedText);
    };

    const convertToInverseCase = () => {
        const convertedText = text.split('').map((char) => {
            return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
        }).join('');
        setText(convertedText);
    };

    const convertToCapitalizeCase = () => {
        const words = text.split(' ');
        const capitalizedWords = words.map((word) => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        });
        const capitalizedText = capitalizedWords.join(' ');
        setText(capitalizedText);
    };

    const clearText = () => {
        setText('');
    };

    const copyText = () => {
        navigator.clipboard.writeText(text);
    };

    const downloadText = () => {
        const element = document.createElement('a');
        const file = new Blob([Text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'text.txt';
        document.body.appendChild(element);
        element.click();
    };
    // const convertToBoldCase = () => {
    //     setBoldText(text.trim().toUpperCase());
            
    //         }
            // setBoldText(boldCaseText)
        
        // setOutputText(circularText);
    

    return (
        <>
            <div className="container dark:bg-slate-900 dark:text-white" >
                {/* <h1>{props.heading}</h1> */}
                <div className="mb-3">
                    <textarea className="textarea textarea-success w-[90%]" value={text} onChange={handleChange} id="myBox" rows="8" placeholder='🖊️ Enter Text Here'></textarea>
                </div>
                <div className="container-1 my-3 font-semibold" >
                    <h2>Your text summary</h2>
                    <p>{text.split(" ").length} words and {text.length} characters</p>
                    <p>{0.008 * text.split(" ").length} Minutes read</p>
                    <br />
                    <h2>Preview</h2>
                    <p>{text.length > 0 ? text : "Enter something in the textbox to preview it here"}</p>
                </div>
                <div className='btn-ccd'>
                    <button className="btn btn-primary my-2 mx-2" onClick={clearText}>Clear Text</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={copyText}>Copy Text</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={downloadText}>Download Text</button>
                </div>

                <div className='btn-design'>
                    <button className="btn btn-primary my-2 mx-2" onClick={convertToLowerCase}>Convert to  lower case</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={convertToUpperCase}>Convert to UPPER CASE</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={convertToSentenceCase}>Convert to Sentence case</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={convertToAlternatingCase}>Convert to aLtErNaTiNg cAsE</button>
                    <button className="btn btn-primary my-2 mx-2" onClick={convertToInverseCase}>Convert to inVeRsE CaSe  </button>
                    <button className="btn btn-primary my-2 mx-2" onClick={convertToCapitalizeCase}>Convert to Capitalize Case</button>
                    {/* <button className="btn btn-primary my-2 mx-2" onClick={convertToBoldCase}>Convert to Bold Case</button> */}
                    {/* <div className='convertedText bold'>{text}</div> */}
<br />
<br />
                
                </div>

            </div>

        </>
    )
}

