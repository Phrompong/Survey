import logo from "./logo.svg";
import "./App.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "../src/contents/content";
import ContentHeader from "./contents/contentHeader";
import ContentFooter from "./contents/contentFooter";

function App() {
  return (
    <div className="App">
      <ContentHeader></ContentHeader>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          borderStyle: "solid",
          marginTop: "2%",
          marginLeft: "5%",
          marginRight: "5%",
        }}
      >
        <Content></Content>
      </div>
      <ContentFooter></ContentFooter>
    </div>
  );
}

export default App;
