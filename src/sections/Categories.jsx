import { faMotorcycle, faTractor, faAppleWhole, faDog, faHourglassEmpty, faPalette, faCar, faBaby, faPumpSoap, faCamera, faMobileScreenButton, faDesktop, faGamepad, faHelmetSafety, faFutbol , faPlug, faMicrophone, faTicket, faHammer, faChair, faPrint, faBuilding, faGuitar, faClock, faChess, faBook, faMusic, faShirt, faHospital, faPeopleGroup, faGift, faSquarePlus} from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect } from 'react'
import { CategoriaContainer } from '../components/CategoriaContainer'
import { MeliContext } from '../contexts/meliContext'
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
        obtenerDatos()
    }, [])

  return (
      <section className='categories-section'>
        <div className='pagination'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div>
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
      </section>  
  )
}
