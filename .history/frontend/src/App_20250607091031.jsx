/* eslint-disable no-unused-vars */
import { useEffect ,useState} from 'react';
import './App.css'
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [code, setCode] = useState(`function sum() {
                        return 1 + 1;
                    }`)
 useEffect(() => {
   prism.highlightAll();
 })
  
  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => prism.highlight(code, prism.languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                width:"100%",
                height: "100%",
                overflow:"auto"
              }}
            
            
            />
          </div>
          <div className="review">Review</div>
        </div>
        <div className="right"></div>
     </main>
    </>
  )
}





export default App
