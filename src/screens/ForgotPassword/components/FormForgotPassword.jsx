import React from 'react';
import InputLabel from '../../../components/InputLabel';
import ButtonSubmit from '../../../components/ButtonSubmit';

export default function FormForgotPassword() {
  return (
    <>
      <form action="">
        <InputLabel type="password" id='input-password' placeholder='zt4bVp9R42Tf'  labelValue="Mot de passe" htmlFor="input-password"/>
        <InputLabel type="password" id='input-password-confirm' placeholder='zt4bVp9R42Tf'  labelValue="Confirmer votre mot de passe" htmlFor="input-password-confirm"/>
        <ButtonSubmit link="/" text="Changer mot de passe"/>
      </form> 
    </>
  )
    
}