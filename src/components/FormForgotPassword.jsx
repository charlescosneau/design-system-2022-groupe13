import React from 'react';
import { Link } from "react-router-dom";

export default function FormForgotPassword() {
  return (
    <>
      <form action="">
        <input type="password" id='input-password' placeholder='zt4bVp9R42Tf' />
        <label htmlFor="input-password">Not de passe</label>
        <input type="password" id='input-password-confirm' placeholder='zt4bVp9R42Tf' />
        <label htmlFor="input-password-confirm">Confirmer votre mot de passe</label>
        <button><Link to="/">Changer mot de passe</Link></button>
      </form> 
    </>
  )
    
}