import React, { useState } from "react";
import "./Homapage.css";
import Flys from "./components/flights/Flys";
import axios from "axios";
import Spinner from "./components/Spinner/Spinner";
function Homapage() {
  const [fly, setFly] = useState([]);
  const [arrayHolder, setArrayHolder] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState("");
  const [loading, setLoading] = useState(false);
  const searchFilterFunction = (event) => {
    const itemData = arrayHolder.filter((item) => {
      const itemData = item.state.toUpperCase();
      const textData = event.target.value.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFly(itemData);
    setSearchBarValue(event.target.value);
    setArrayHolder(fly);
  };

  function click() {
    setLoading(true);
    axios
      .get("https://flytek.herokuapp.com/fly/api/location/")
      .then((response) => {
        console.log(response.data);
        const Flys = response.data;
        setFly(Flys);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <input type="text" value={searchBarValue} onChange={searchFilterFunction} style={{ marginTop: "70px" }} />
      <button onClick={click}>پرواز های امروز</button>
      <div className="homepage"> {loading ? <Spinner /> : <Flys flylist={fly} />}</div>
    </div>
  );
}

export default Homapage;
