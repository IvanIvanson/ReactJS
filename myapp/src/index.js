import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
const myName = 'ReactJS';
const message = 'Hello';

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
<hr/>
    <App name={myName} />
    <ClassComponent onClick={(target)=>{alert(target)}}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

