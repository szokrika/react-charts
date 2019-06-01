import React from "react";
import ReactDOM from "react-dom";
import Chart from "./Chart";
import { data } from "./data";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello Nivo Chart</h1>
      <div className="chart-list">
        <Chart data={data} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
