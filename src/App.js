import logo from "./logo.svg";
import "./App.css";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "../src/contents/content";
import ContentHeader from "./contents/contentHeader";
import ContentFooter from "./contents/contentFooter";
import Banner from "./contents/banner";
import { Filler } from "chart.js";

function App() {
  return (
    <div className="App">
      <ContentHeader></ContentHeader>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          flexWrap: "wrap",
          marginTop: "2%",
          marginLeft: "5%",
          marginRight: "5%",
          marginBottom: "2%",
        }}
      >
        <Banner></Banner>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "70% auto",
            gridGap: "2%",
          }}
        >
          <div
            style={{ gridRow: "1 / span 4" }}
            class="shadow-lg p-3 mb-5 bg-white rounded"
          >
            <Content></Content>
          </div>

          <div class="shadow-lg p-3 mb-5 bg-white rounded">1</div>
          <div class="shadow-lg p-3 mb-5 bg-white rounded">2</div>
          <div class="shadow-lg p-3 mb-5 bg-white rounded">3</div>
          <div class="shadow-lg p-3 mb-5 bg-white rounded">4</div>
        </div>
      </div>
      <ContentFooter></ContentFooter>
    </div>
  );
}

export default App;
