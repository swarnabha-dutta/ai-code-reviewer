import { useEffect ,useState} from 'react';
import './App.css'
import "prismjs/themes/prism-tomorrow.css";
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
            <pre>
              <code className="language-javascript ">
                    {}
              </code>
            </pre>
          </div>
          <div className="review">Review</div>
        </div>
        <div className="right"></div>
     </main>
    </>
  )
}





export default App
