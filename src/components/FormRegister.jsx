import React from 'react';

export default function FormRegister() {
  return (
    <>
      <form action="">
        <a href="/login">Déjà utilisateur ?</a>
        <input type="text" id='input-username' placeholder="John Doe" />
        <label htmlFor="input-username">Nom d'utilisateur</label>
        <input type="text" id="input-email" placeholder='exemple@mail.fr' />
        <label htmlFor="input-email">Email</label>
        <input type="password" id='input-password' placeholder='zt4bVp9R42Tf' />
        <label htmlFor="input-password">Not de passe</label>
        <input type="password" id='input-password-confirm' placeholder='zt4bVp9R42Tf' />
        <label htmlFor="input-password-confirm">Confirmer votre mot de passe</label>
        <input type="submit" value="Creer votre compte"/>
      </form> 
    </>
  )
    
}