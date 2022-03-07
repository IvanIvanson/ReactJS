import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
const myName = 'ReactJS';
const message = 'Lesson 1';

const FunctionComponent = ({onClick}) =>{
  const [messages, setMessages] = useState(["Message 1"])
  const sendMessage = (message) => {
setMessages([...messages, message])
  }
  
  // useEffect lesson-2
  useEffect(() => {
    const TEXT = "hello from bot"
    
    const lastMessages = messages[messages.length - 1]
    let timerId = null
    if(lastMessages !== TEXT){
    timerId = setTimeout(() => {
        setMessages([...messages, TEXT])
      },1000)
    }
    return () => {
      // alert("useEffect")
      clearInterval(timerId)
    }
  }, [messages])
  
  // -------
  return (
<div>
<button class = "btnBot" onClick={() => sendMessage(<h1>test</h1>)}>sendMessage</button>
  <h2>{messages.map(m => <h3 class="botAnswer">{m}</h3>)}</h2>
</div>
  )
}

// ===============
const reactElement = (
  <div>
<h2 className="App">Hello React</h2>
<h3 className="App">Message: {message}</h3>
  </div>
);

const Message = () => {
  
  return reactElement 
}

class ClassComponent extends React.Component {
  // constructor(props){
  //   alert('constructor')
  //   super(props)
  // }
  render() {
    const {onClick} = this.props;
    return (
      <div>
<button className="Btn-message" onClick={()=>onClick(message)}>click</button>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
<Message />
<Example/>
{/* <MyResponsiveComponent/> */}
<Counter/>
<ClassComponent onClick={(target)=>{alert(target)}}/>
<hr/>
    <App name={myName} />
   
  <FunctionComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals



function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
// function MyResponsiveComponent() {
//   const width = useWindowWidth(); 
//   return (
//     <p>Window width is {width}</p>
//   );
// }
// function useWindowWidth() {
//   const [width, setWidth] = useState(window.innerWidth);
  
//   useEffect(() => {
//     const handleResize = () => setWidth(window.innerWidth);
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   });
  
//   return width;
// }

function Counter({initialCount}) {
  initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <div class="counter">
      Count: {count}
      <button id="btn1" onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
    </div>
  );
}
// --------------
