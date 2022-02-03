import React from 'react';
import { Link } from "react-router-dom";

export default function ButtonSubmit(props) {
  return (
    <>
    <button>
      <Link to={props.link}>{props.text}</Link>
    </button>
    </>
  );
}
