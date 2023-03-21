import { Icon } from '../icons/Icon'
import '../styles/CategoriaContainer.css'

export const CategoriaContainer = ({ icon, categoryName }) => {
  return (
    <div className='categoria-container'>
        <a  href='' >
            <Icon icon={ icon } />
            <p>{ categoryName }</p>
        </a>
    </div>
    
  )
}
