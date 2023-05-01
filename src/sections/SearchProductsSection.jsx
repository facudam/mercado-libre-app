import { useContext } from 'react';
import { SearchProductContainer } from '../components/SearchProductContainer'
import '../styles/SearchProductsSection.css'
import { PaginationComponent } from '../components/PaginationComponent';
import { MeliContext } from '../contexts/meliContext';
import { CompareButton } from '../modals/CompareButton';



export const SearchProductsSection = ({ results }) => {

  const MAX_ITEMS = 20;
  const { currentPage, setCurrentPage, getMaxPages, productsToCompare } = useContext(MeliContext)
 

  const handleNext = () => { 
    window.scrollTo(0,0)
    setCurrentPage(currentPage + 1)
  }

  const handleBefore = () => {
    window.scrollTo(0,0)
    setCurrentPage(currentPage - 1)
  }

  return (
   <>
    {
      productsToCompare.length > 1 && <CompareButton />
    }
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
            item={ item }
          />
        ))
      }

      {
        //En caso que no haya más de una página, que no se renderice:
        (currentPage === 1 && getMaxPages(results) == 1) 
          ? null
          : <PaginationComponent 
              MAX_PAGES={ getMaxPages(results) } 
              anterior={handleBefore}
              siguiente={handleNext}
            />
      } 
    </div>
   </>
  )
}
