import logo from "./logo.svg";
import "./App.css";
export function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Lesson 2, {props.name}</h3>
      </header>
    </div>
  );
}

