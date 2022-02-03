import React from 'react';
import { Link } from "react-router-dom";
import InputLabel from './InputLabel';
import ButtonSubmit from './ButtonSubmit';

export default function FormLogIn() {
  return (
    <>
      <form action="">
        <Link to="/register">Vous n'avez pas de compte ?</Link>
        <InputLabel type="text" id="input-email" placeholder='exemple@mail.fr' htmlFor="input-email" labelValue="Email"/>
        <InputLabel type="password" id='input-password' placeholder='zt4bVp9R42Tf' htmlFor="input-password" labelValue="Mot de passe"/>
        <ButtonSubmit link="/home" text="Se connecter"/>
        <Link to="/forgotpassword">Mot de passe oublié</Link>
      </form> 
    </>
  )
    
}
