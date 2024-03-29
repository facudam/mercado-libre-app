import { useContext, useEffect } from 'react';
import { SearchProductContainer } from '../components/SearchProductContainer'
import '../styles/SearchProductsSection.css'
import { PaginationComponent } from '../components/PaginationComponent';
import { MeliContext } from '../contexts/MeliContext';
import { CompareButton } from '../modals/CompareButton';
import { ProductsComparison } from '../modals/ProductsComparison';
import { MaintenanceModal } from '../modals/MaintenanceModal';



export const SearchProductsSection = ({ results }) => {

  const MAX_ITEMS = 20;
  const { currentPage, setCurrentPage, getMaxPages, productsToCompare, showProductsComparison, setShowProductsComparison, setCantidadItem } = useContext(MeliContext)
 

  const handleNext = () => { 
    window.scrollTo(0,0)
    setCurrentPage(currentPage + 1)
  }

  const handleBefore = () => {
    window.scrollTo(0,0)
    setCurrentPage(currentPage - 1)
  }

  useEffect(() => { setCantidadItem(1) }, [])

  return (
   <>
   {/* showProductsComparison && <ProductsComparison /> */}
    {
      showProductsComparison && <MaintenanceModal />
    }
    
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
