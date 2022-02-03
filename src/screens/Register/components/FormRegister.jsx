import React from 'react';
import { Link } from "react-router-dom";
import InputLabel from '../../../components/InputLabel';
import ButtonSubmit from '../../../components/ButtonSubmit';

export default function FormRegister() {
  return (
    <>
      <form action="">
        <Link to="/">Déjà utilisateur ?</Link>
        <InputLabel type="text" id='input-username' placeholder="John Doe" labelValue="Nom d'utilisateur" htmlFor="input-username"/>
        <InputLabel type="text" id="input-email" placeholder='exemple@mail.fr' labelValue="Email" htmlFor="input-email"/>
        <InputLabel type="password" id='input-password' placeholder='zt4bVp9R42Tf' labelValue="Mot de passe" htmlFor="input-password" />
        <InputLabel type="password" id='input-password-confirm' placeholder='zt4bVp9R42Tf' labelValue="Confirmer votre mot de passe" htmlFor="input-password-confirm" />
        <ButtonSubmit link="/home" text="Creer votre compte" />
      </form> 
    </>
  )
    
}