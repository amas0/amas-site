import React from "react";
import { Vega } from "react-vega";

function VegaWrapper(props) {
  return (
    <div style={{display: "flex", marginLeft: "-1rem"}}>
      <Vega {...props} actions={false}/>
    </div>
  );
}

export default VegaWrapper;
