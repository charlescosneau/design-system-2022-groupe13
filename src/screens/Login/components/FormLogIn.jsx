import React from 'react';
import InputField from '../../../components/InputField';
import CallToAction from '../../../components/CallToAction';
import RouterLink from '../../../components/RouterLink';

export default function FormLogIn() {
  return (
    <>
      <form action="">
        <RouterLink to="register" text="Vous n'avez pas de compte ?" />
        <InputField type="text" id="input-email" placeholder='exemple@mail.fr' htmlFor="input-email" labelValue="Email"/>
        <InputField type="password" id='input-password' placeholder='zt4bVp9R42Tf' htmlFor="input-password" labelValue="Mot de passe"/>
        <CallToAction link="/home" text="Se connecter"/>
        <RouterLink to="/forgotpassword" text="Mot de passe oublié" />
      </form>
    </>
  )
}
