import React from 'react';
import InputField from '../../../components/InputField';
import CallToAction from '../../../components/CallToAction';
import RouterLink from '../../../components/RouterLink';

export default function FormRegister() {
  return (
    <>
      <form action="">
        <RouterLink to="/" text="Déjà utilisateur ?" />
        <InputField type="text" id='input-username' placeholder="John Doe" labelValue="Nom d'utilisateur" htmlFor="input-username" labelClassName="input-label" />
        <InputField type="text" id="input-email" placeholder='exemple@mail.fr' labelValue="Email" htmlFor="input-email" labelClassName="input-label" />
        <InputField type="password" id='input-password' placeholder='zt4bVp9R42Tf' labelValue="Mot de passe" htmlFor="input-password" labelClassName="input-label" />
        <InputField type="password" id='input-password-confirm' placeholder='zt4bVp9R42Tf' labelValue="Confirmer votre mot de passe" htmlFor="input-password-confirm" labelClassName="input-label" />
        <CallToAction link="/home" text="Creer votre compte" />
      </form>
    </>
  )
}