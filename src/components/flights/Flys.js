import React, { useEffect } from "react";
import Fly from "./Fly";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
const Flys = (props) => {
  useEffect(() => {
    //console.log(props.flylist)
  }, [props.flylist]);
  let flys = props.flylist.map((fly, index) => (
    <ErrorBoundary key={index}>
      <Fly id={fly.id} country={fly.country} state={fly.title} city={fly.city} airline={fly.is_active} />
    </ErrorBoundary>
  ));
  if (props.toggle) {
    return <div>{flys}</div>;
  }
  return flys;
};
//   return <Fly />;
//   return props.flylist.map((fly, index) => <Fly />);
// };
export default Flys;
