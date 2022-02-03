import React from 'react';

export default function FormForgotPassword() {
  return (
    <>
      <form action="/login">
        <input type="password" id='input-password' placeholder='zt4bVp9R42Tf' />
        <label htmlFor="input-password">Not de passe</label>
        <input type="password" id='input-password-confirm' placeholder='zt4bVp9R42Tf' />
        <label htmlFor="input-password-confirm">Confirmer votre mot de passe</label>
        <input type="submit" value="Changer mot de passe"/>
      </form> 
    </>
  )
    
}