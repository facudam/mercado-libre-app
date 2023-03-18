import '../styles/TiendasSection.css'
import { Tienda } from './Tienda'
//Philips images:
import philipsFondo from '../images/philipsFondo.jpg'
import philipsLogo from '../images/philipsLogo.webp'
import philips1 from '../images/philips1.webp'
import philips2 from '../images/philips2.webp'
import philips3 from '../images/philips3.webp'

//Sportline images:
import sportlineFondo from '../images/sportlineFondo.jpg'
import sportlineLogo from '../images/sportlineLogo.webp'
import sportline1 from '../images/sportline1.webp'
import sportline2 from '../images/sportline2.webp'
import sportline3 from '../images/sportline3.webp'

//Fravega images:
import fravegaFondo from '../images/fravegaFondo.jpg'
import fravegaLogo from '../images/fravegaLogo.webp'
import fravega1 from '../images/fravega1.webp'
import fravega2 from '../images/fravega2.webp'
import fravega3 from '../images/fravega3.webp'

//LG images:
import lgFondo from '../images/lgFondo.jpg'
import lgLogo from '../images/lgLogo.webp'
import lg1 from '../images/lg1.webp'
import lg2 from '../images/lg2.webp'
import lg3 from '../images/lg3.webp'

export const TiendasSection = () => {
  return (
    <section className='tiendas-section'>
        {/* Reutilizamos estilos css de Ofertas */}
        <div className="ofertas-title">
            <h2 className="ofertas-title__h2">Las mejores tiendas te esperan</h2>
            <a className="ofertas-title__anchor" href="">Ver tiendas</a>
        </div>
        <div className='tiendas-section__tiendas'>
            <Tienda 
                fondo={ philipsFondo } 
                logo={ philipsLogo } 
                marca='Philips' 
                img1={ philips1 }
                img2={ philips2 }
                img3={ philips3 }
            />
            <Tienda 
                fondo={ sportlineFondo }
                logo={ sportlineLogo }
                marca='Sportline'
                img1={ sportline1 }
                img2={ sportline2 }
                img3={ sportline3 }
            />
            <Tienda 
                fondo={ fravegaFondo }
                logo={ fravegaLogo }
                marca='Fravega'
                img1={ fravega1 }
                img2={ fravega2 }
                img3={ fravega3 }
            />
            <Tienda 
                fondo={ lgFondo }
                logo={ lgLogo }
                marca='LG'
                img1={ lg1 }
                img2={ lg2 }
                img3={ lg3 }
            />
        </div>
    </section>
  )
}
