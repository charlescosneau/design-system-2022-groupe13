import React from 'react';
import "../styles/components/inputlabel.css"

export default function InputLabel(props) {
  return (
    <div className="container-input-label">
      <label htmlFor={ props.htmlFor } className={ props.labelClassName }>{ props.labelValue }</label>
      <input type={ props.type } id={ props.id } placeholder={ props.placeholder } className={ props.inputClassName } />
    </div>
  )
}