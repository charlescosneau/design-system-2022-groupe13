import React from 'react';
import { Link } from "react-router-dom";

export default function RouterLink(props) {
  return (
    <>
      <Link className={props.routerLinkClassName} to={props.to}>{props.text}</Link>
    </>
  );
}