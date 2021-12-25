import React, { useState } from "react";
import "./App.css";
import Flys from "./components/flights/Flys";
import axios from "axios";

function App() {
  const [fly, setFly] = useState([]);
  const [arrayHolder, setArrayHolder] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  const searchFilterFunction = (event) => {
    const itemData = arrayHolder.filter((item) => {
      const itemData = item.title.toUpperCase();
      const textData = event.target.value.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFly(itemData);
    setSearchBarValue(event.target.value);
    setArrayHolder(fly);
  };

  function click() {
    axios
      .get("https://jsonplaceholder.ir/posts")
      .then((response) => {
        console.log(response.data);
        const Flys = response.data;
        setFly(Flys);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <input type="text" value={searchBarValue} onChange={searchFilterFunction} style={{ marginTop: "70px" }} />
      <button onClick={click}>پرواز های امروز</button>
      <Flys flylist={fly} />
    </div>
  );
}

export default App;
