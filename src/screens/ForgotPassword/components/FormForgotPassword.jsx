import React from 'react';
import InputField from '../../../components/InputField';
import CallToAction from '../../../components/CallToAction';

export default function FormForgotPassword() {
  return (
    <>
      <form action="" className="container-input-label content">
        <InputField type="password" id='input-password' placeholder='zt4bVp9R42Tf'  labelValue="Mot de passe" htmlFor="input-password" labelClassName="input-label" />
        <InputField type="password" id='input-password-confirm' placeholder='zt4bVp9R42Tf'  labelValue="Confirmer votre mot de passe" htmlFor="input-password-confirm" labelClassName="input-label" />
        <CallToAction link="/" text="Confirmer" ctaClassName="cta-primary" ctaLabelClassName="cta-primary-label"/>
      </form>
    </>
  )
    
}