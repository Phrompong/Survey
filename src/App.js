import logo from "./logo.svg";
import "./App.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Content from "../src/contents/content";

function App() {
  return (
    <div className="App">
      <h1>Header</h1>
      <div style={{ borderStyle: "solid", margin: "5%" }}>
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
