import { SearchProductContainer } from '../components/SearchProductContainer'
import '../styles/SearchProductsSection.css'

export const SearchProductsSection = ({ results }) => {
  return (
    <div className='search-products-section'>
      {
        results.map(item => (
          <SearchProductContainer 
            key={ item.id }
            identifier={ item.id }
            img={ item.id }
            name={ item.title }
            price={ item.price}
          />
        ))
      }
    </div>
  )
}
