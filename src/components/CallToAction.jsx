import React from 'react';
import { Link } from "react-router-dom";

export default function CallToAction(props) {
  return (
    <>
    <button className={props.ctaClassName}>
      <Link className={props.ctaLabelClassName} to={props.link}>{props.text}</Link>
    </button>
    </>
  );
}
