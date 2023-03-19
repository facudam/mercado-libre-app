import { useContext, useEffect } from 'react'
import { MeliContext } from '../contexts/meliContext'
import { getCategories } from '../helpers/getCategories'

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
    <section>
      {
        categories.map(cat => (
          <div key={cat.id}>
            <p>{cat.name}</p>
          </div>
        ))
      }
    </section>
  )
}
