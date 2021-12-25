import React, { useEffect } from "react";
import Fly from "./Fly";
import "./Flys.css";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
const Flys = (props) => {
  useEffect(() => {
    //console.log(props.flylist)
  }, [props.flylist]);
  let flys = props.flylist.map((fly, index) => (
    <ErrorBoundary key={index}>
      <Fly id={fly.id} country={fly.country} state={fly.state} city={fly.city} airport={fly.airport} />
    </ErrorBoundary>
  ));
  if (props.toggle) {
    return <div className="flys">{flys}</div>;
  }
  return flys;
};
//   return <Fly />;
//   return props.flylist.map((fly, index) => <Fly />);
// };
export default Flys;
