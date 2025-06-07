import { useEffect ,useState} from 'react';
import './App.css'
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-javascript";
import prism from "prismjs";
import './App.css'

function App() {
 useEffect(() => {
   prism.highlightAll();
 })
  return (
    <>
      <main>
        <div className="left">
          <div className="code"></div>
          <div className="review">Review</div>
        </div>
        <div className="right"></div>
     </main>
    </>
  )
}

export default App
