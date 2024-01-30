import { faMotorcycle, faTractor, faAppleWhole, faDog, faHourglassEmpty, faPalette, faCar, faBaby, faPumpSoap, faCamera, faMobileScreenButton, faDesktop, faGamepad, faHelmetSafety, faFutbol , faPlug, faMicrophone, faTicket, faHammer, faChair, faPrint, faBuilding, faGuitar, faClock, faChess, faBook, faMusic, faShirt, faHospital, faPeopleGroup, faGift, faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect } from 'react'
import { CategoriaContainer } from '../components/CategoriaContainer'
import { MeliContext } from '../contexts/MeliContext'
import { getCategories } from '../helpers/getCategories'
import '../styles/Categories.css'


export const Categories = () => {

    const { categories, setCategories } = useContext(MeliContext)

    const iconList = [faMotorcycle, faTractor, faAppleWhole, faDog, faHourglassEmpty, faPalette, faCar, faBaby, faPumpSoap, faCamera, faMobileScreenButton, faDesktop, faGamepad, faHelmetSafety, faFutbol , faPlug, faMicrophone, faTicket, faHammer, faChair, faPrint, faBuilding, faGuitar, faClock, faChess, faBook, faMusic, faShirt, faHospital, faPeopleGroup, faGift, faSquarePlus]

    const obtenerDatos = async() => {
      const listaCategorias = await getCategories()
      setCategories(listaCategorias)
    }

    useEffect(() => {
      const categoriesMainContainer = document.querySelector('.categories-container__main');
      const spanButtons = document.querySelectorAll('.span')
    
      document.addEventListener('click', (e) => {
        // Reconocemos donde se ejecutó el evento click, modificamos el margin left y añadimos la clase span-is-active:
        if (e.target === spanButtons[0]) {
          categoriesMainContainer.style.marginLeft = '0%'
          spanButtons[0].classList.add('span-is-active')
          spanButtons[1].classList.remove('span-is-active')
          spanButtons[2].classList.remove('span-is-active')
        } if (e.target === spanButtons[1]) {
          categoriesMainContainer.style.marginLeft = '-100%'
          spanButtons[0].classList.remove('span-is-active')
          spanButtons[1].classList.add('span-is-active')
          spanButtons[2].classList.remove('span-is-active')
        } if (e.target === spanButtons[2]) {
          categoriesMainContainer.style.marginLeft = '-129%'
          spanButtons[0].classList.remove('span-is-active')
          spanButtons[1].classList.remove('span-is-active')
          spanButtons[2].classList.add('span-is-active')
        }
      })
    }, [])


    useEffect(() => {
        obtenerDatos()
    }, [])

  return (
      <section className='categories-section'>
        <h2 className='categories-section__title'>Categorías populares</h2>
        <div className='pagination'>
          <span className={`span span-is-active`}></span>
          <span className='span'></span>
          <span className='span'></span>
        </div>
        <div className='categories-container'>
          <div className='categories-container__main'>
          {
            categories.map((cat, index) => (
              <CategoriaContainer 
                key={cat.id}
                icon={iconList[index]} 
                categoryName={ cat.name }
              />
            ))
          }
          </div>
        </div>
      </section>  
  )
}
