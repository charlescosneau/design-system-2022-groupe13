import React from 'react';

export default function FormLogIn() {
  return (
    <>
      <form action="">
        <a href="/register">Vous n'avez pas de compte ?</a>
        <input type="text" id="input-email" placeholder='exemple@mail.fr' />
        <label htmlFor="input-email">Email</label>
        <input type="password" id='input-password' placeholder='zt4bVp9R42Tf' />
        <label htmlFor="input-password">Not de passe</label>
        <input type="submit" value="Se connecter"/>
        <a href="/user/forgotpassword">Mot de passe oublié</a>
      </form> 
    </>
  )
    
}
