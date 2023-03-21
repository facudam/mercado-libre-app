import { faCake } from '@fortawesome/free-solid-svg-icons'
import { useContext, useEffect } from 'react'
import { CategoriaContainer } from '../components/CategoriaContainer'
import { MeliContext } from '../contexts/meliContext'
import { getCategories } from '../helpers/getCategories'
import '../styles/Categories.css'


export const Categories = () => {

    const { categories, setCategories } = useContext(MeliContext)

    const obtenerDatos = async() => {
      const listaCategorias = await getCategories()
      setCategories(listaCategorias)
    }

    useEffect(() => {
        obtenerDatos()
    }, [])

  return (
    <section className='categories-section'>
      {
        categories.map(cat => (
          <CategoriaContainer icon={faCake} categoryName={ cat.name } />
        ))
      }
    </section>
  )
}
