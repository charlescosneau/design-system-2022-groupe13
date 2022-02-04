import React from 'react';
import InputField from '../../../components/InputField';
import CallToAction from '../../../components/CallToAction';
import RouterLink from '../../../components/RouterLink';

export default function FormRegister() {
  return (
    <>
      <form action="">
        <RouterLink to="/" text="Déjà utilisateur ?" />
        <InputField type="text" id='input-username' placeholder="John Doe" labelValue="Nom d'utilisateur" htmlFor="input-username"/>
        <InputField type="text" id="input-email" placeholder='exemple@mail.fr' labelValue="Email" htmlFor="input-email"/>
        <InputField type="password" id='input-password' placeholder='zt4bVp9R42Tf' labelValue="Mot de passe" htmlFor="input-password" />
        <InputField type="password" id='input-password-confirm' placeholder='zt4bVp9R42Tf' labelValue="Confirmer votre mot de passe" htmlFor="input-password-confirm" />
        <CallToAction link="/home" text="Creer votre compte" />
      </form> 
    </>
  )
}