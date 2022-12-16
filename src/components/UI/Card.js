import React from "react";

import "./Card.css";

// this component is a REUSABLE style component
// we can replace a div with this component, if the div hav the same styling as the this component.

function Card(props) {
  // classes => will be able to have more than 1 className, (card className) and any className the we use on the Card component when we replace it with the div
  const classes = "card " + props.className;

  // {props.children} => when we replace the div with a Card component we what all the code in side that component, so we basically send it here as props and the children will be all the code
  return <div className={classes}>{props.children}</div>;
}
export default Card;
