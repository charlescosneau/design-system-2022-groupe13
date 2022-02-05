import React from 'react';
import InputField from '../../../components/InputField';
import CallToAction from '../../../components/CallToAction';
import RouterLink from '../../../components/RouterLink';

export default function FormLogIn() {
  return (
    <>
      <form action="" className="container-input-label content">
        <InputField type="text" id="input-email" placeholder='exemple@mail.fr' htmlFor="input-email" labelValue="Email" labelClassName="input-label"/>
        <InputField type="password" id='input-password' placeholder='zt4bVp9R42Tf' htmlFor="input-password" labelValue="Mot de passe" labelClassName="input-label" />
        <CallToAction link="/home" text="Se connecter" ctaClassName="cta-primary" ctaLabelClassName="cta-primary-label"/>
        <div className='df'>
          <RouterLink to="register" text="Vous n'avez pas de compte ?" routerLinkClassName="router-link" />
          <RouterLink to="/forgotpassword" text="Mot de passe oublié" routerLinkClassName="router-link" />
        </div>
      </form>
    </>
  )
}
