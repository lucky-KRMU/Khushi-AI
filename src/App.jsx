import { useState, useEffect } from 'react'
import './CSS/App.css';
import SearchBar from './components/SearchBar/SearchBar';
import OutputBox from './components/OutputBox/OutputBox';
import nlp from 'compromise';

function App() {

  let [output, setOutput] = useState("Your Hastags will be Generated Here...");
  let [input, setInput] = useState("");


  function generateHastags(prompt, limit=8){
    const doc = nlp(prompt);

    const keyword = [
      ...doc.nouns().out("array"),
      ...doc.topics().out("array")
    ]

    return [...new Set(keyword)]
    .slice(0, limit)
    .map( (word) => "#" + word.replace(/\s+/g, "").toLowerCase());
  }


  const searchBoxBtnClk = (content) => {
    setInput("");

    let finalOutput = generateHastags(content).map((ele)=> (ele.concat(" ")));
    // console.log(finalOutput);
    setOutput(finalOutput);
  }
  
  return (
    <>
        <h1>Khushi-AI</h1>
        <OutputBox outputProp={output} />
        {/* <SearchBar /> */}
        <div className="search-box">
                <input type="text" 
                placeholder='Enter your News article here...' 
                name="search-box-input-text" 
                id="search-box-input-text"
                value={input}
                onChange={(e)=> setInput(e.target.value)}
                />

                <button id="go-btn" 
                title='Go with the search...?'
                onClick={()=> searchBoxBtnClk(input)}
                >&#10162;</button>
            </div>
    </>
  )
}

export default App
