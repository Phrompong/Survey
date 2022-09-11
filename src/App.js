import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "../src/contents/content";
import ContentHeader from "./contents/contentHeader";
import ContentFooter from "./contents/contentFooter";
import Banner from "./contents/banner";
import Rank from "./contents/rank";

function App() {
  return (
    <div className="App">
      <ContentHeader></ContentHeader>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "2%",
          marginLeft: "5%",
          marginRight: "5%",
          marginBottom: "2%",
        }}
      >
        <Banner></Banner>

        <div className="Container">
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
        <h4 style={{ textAlign: "left" }}>10 อันดับตำแหน่งงานยอดฮิต</h4>
        <div class="shadow-lg p-3 mb-5 bg-white rounded">
          <Rank></Rank>
        </div>
      </div>
      <ContentFooter></ContentFooter>
    </div>
  );
}

export default App;
