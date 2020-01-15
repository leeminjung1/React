import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment';

const comment = [
  {name: "민정", content: 'mycomment'},
  {name: "MinJungLee", content: 'mycomment'},
  {name: "민정", content: 'mycomment'},
  {name: "TonyStark", content: 'mycomment'},
];


function App() {
  return (
    <div className="App" style={{padding: 16, backgroundColor: '#282c34'}}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
          {comment.map((comment,index)=>{
            return(
              <Comment
                  name={comment.name}
                  content={comment.content} />
            )
          })}
      </div>
    </div>
  );
}

export default App;
