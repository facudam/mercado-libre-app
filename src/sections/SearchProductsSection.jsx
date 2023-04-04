import { useContext } from 'react';
import { SearchProductContainer } from '../components/SearchProductContainer'
import '../styles/SearchProductsSection.css'
import { PaginationComponent } from '../components/PaginationComponent';
import { MeliContext } from '../contexts/meliContext';


export const SearchProductsSection = ({ results }) => {

  const MAX_ITEMS = 20;
  const { currentPage, setCurrentPage } = useContext(MeliContext)
 


  const MAX_PAGES = Math.round(results.length / MAX_ITEMS);

  const handleNext = () => { 
    setCurrentPage(currentPage + 1)
  }

  const handleBefore = () => {
    setCurrentPage(currentPage - 1)
  }

  return (
    <div className='search-products-section'>
      {
        results.slice(
            (currentPage - 1) * MAX_ITEMS, 
            (currentPage - 1) * MAX_ITEMS + MAX_ITEMS).map(item => (
          <SearchProductContainer 
            key={ item.id }
            identifier={ item.id }
            img={ item.id }
            name={ item.title }
            price={ item.price}
          />
        ))
      }

      <PaginationComponent 
        MAX_PAGES={ MAX_PAGES } 
        anterior={handleBefore}
        siguiente={handleNext}
      />
      
    </div>
  )
}
