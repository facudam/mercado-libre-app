import { useContext } from 'react';
import { MeliContext } from '../contexts/meliContext';
import '../styles/MenuHamburguesa.css';

export const MenuHamburguesa = () => {

  const { menuActive, setMenuActive } = useContext(MeliContext)

  const toggleMenu = () => {
    const hamburger = document.querySelector('.hamburger')
      hamburger.classList.toggle('is-active');
    
      menuActive ? setMenuActive(false) : setMenuActive(true);
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
