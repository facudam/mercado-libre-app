import { useEffect } from 'react';
import '../styles/MenuHamburguesa.css';

export const MenuHamburguesa = () => {

useEffect(() => {
    const menu = document.querySelector('.hamburger-menu');
    menu.addEventListener('click', toggleMenu)

}, [])

const toggleMenu = () => {
    const bar = document.querySelectorAll('.bar')

    bar.forEach(div => {
      div.classList.toggle('animate')
    });  
}

  return (   
    <div class="hamburger-menu">
        <div class="bar"></div>
        <div class="bar"></div>
        <div class="bar"></div>
    </div>

  )
}
