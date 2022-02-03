import React from 'react';
import { Routes, Route, Link } from "react-router-dom";

export default function FormLogIn() {
  return (
    <>
      <form action="">
        <Link to="/register">Vous n'avez pas de compte ?</Link>
        <input type="text" id="input-email" placeholder='exemple@mail.fr' />
        <label htmlFor="input-email">Email</label>
        <input type="password" id='input-password' placeholder='zt4bVp9R42Tf' />
        <label htmlFor="input-password">Not de passe</label>
        <button><Link to="/home">Se connecter</Link></button>
        <Link to="/forgotpassword">Mot de passe oublié</Link>
      </form> 
    </>
  )
    
}
