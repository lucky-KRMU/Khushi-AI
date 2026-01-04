import React from "react";
import '../../CSS/OutputBox.css';

function OutputBox ({outputProp}) {

    const copyBtnFunc = (text) => {
        navigator.clipboard.writeText(text)
        .then(()=>{
            alert(`Text Copied`)
        })
        .catch(()=>{
            console.error("failed to copy text")
        })
    };

    return(
        <>
            <div className="output-box">
                <p>{outputProp}</p>
                <button id="op-box-btn" onClick={()=>copyBtnFunc(outputProp)}>Copy!</button>
            </div>
        </>
    );
}

export default OutputBox;