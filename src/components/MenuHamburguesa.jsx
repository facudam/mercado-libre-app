import { useEffect } from 'react';
import '../styles/MenuHamburguesa.css';

export const MenuHamburguesa = () => {

useEffect(() => {
    const menu = document.querySelector('.hamburger-menu');
    menu.addEventListener('click', toggleMenu)

    return () => {
      menu.removeEventListener('click', toggleMenu)
    }

}, [])

const toggleMenu = () => {
    const bar = document.querySelectorAll('.bar')

    bar.forEach(div => {
      div.classList.toggle('animate')
    });  
}

  return (   
    <div className="hamburger-menu">
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
    </div>

  )
}
