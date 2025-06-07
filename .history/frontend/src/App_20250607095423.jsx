/* eslint-disable no-unused-vars */
import { useEffect ,useState} from 'react';
import './App.css'
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import "highlight.js/styles/github-dark.css";
import axios from 'axios';
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
  }`)

  const [reviewedCode, setReviewedCode] = useState(``);
 useEffect(() => {
   prism.highlightAll();
 })
  
 async function reviewCode() {
  try {
    const response = await axios.post('http://localhost:3000/ai/get-review', { code });

    console.log("Response from backend:", response.data);

    // If your backend returns: { result: "some string" }
    setReviewedCode(response.data);

  } catch (err) {
    console.error("API Error:", err);
    setReviewedCode("Error from backend.");
  }
}


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
          <div
              onClick={reviewCode}
            className="review">Review</div>
        </div>
        <div className="right">
          <Markdown
          
          rehypePlugins={[rehypeHighlight]}
          >
            {reviewedCode}
          </Markdown>
        </div>
     </main>
    </>
  )
}





export default App
