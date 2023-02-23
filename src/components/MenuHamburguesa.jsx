import { useEffect } from 'react';
import '../styles/MenuHamburguesa.css';

export const MenuHamburguesa = () => {

  const toggleMenu = () => {
    const hamburger = document.querySelector('.hamburger')
      hamburger.classList.toggle('is-active')
  };  


  return (   
    <button
      onClick={ toggleMenu }
      className="hamburger hamburger--slider" type="button">
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>

  )
}
