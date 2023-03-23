import { Icon } from '../icons/Icon'
import '../styles/CategoriaContainer.css'

export const CategoriaContainer = ({ icon, categoryName }) => {
  return (
    
      <a className='categoria-container'  href='' >
        <Icon icon={ icon } className='icon-width' />
        <p>{ categoryName }</p>
      </a> 
    
  )
}
