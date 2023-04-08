import { useState, useEffect } from 'react'
import { getProductDescription } from '../helpers/getProductDescription'
import '../styles/ProductDescriptionSection.css'

export const ProductDescriptionSection = ({id}) => {

    const [ description, setDescription ] = useState('')

    const getDescription = async() => {
        const data = await getProductDescription(id)
        setDescription(data)
    }

    useEffect(() => {
        getDescription()
    }, [description])

  return (
    <section className='description-section'>
        <h2>Descripción</h2>
        <p className='description-p'>{ description.plain_text }</p>
    </section>
  )
}
