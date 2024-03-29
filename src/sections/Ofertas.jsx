import { useContext, useEffect } from "react"
import { MeliContext } from "../contexts/MeliContext"
import { getProducts } from "../helpers/getProducts"
import { ProductoContainer } from "../components/ProductoContainer"
import '../styles/Ofertas.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Keyboard, Scrollbar, Navigation } from "swiper";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { convertToCurrencyFormat } from "../helpers/convertToCurrencyFormat"


export const Ofertas = ({ title, toSearch }) => {

    const { productosEnOferta, setProductosEnOferta } = useContext(MeliContext)

    const getInfoProducts = async() => {
          const listaProductos = await getProducts(toSearch);
          setProductosEnOferta(listaProductos.results)         
        }

    

    useEffect(() => {    
        getInfoProducts()
    }, [])

  return (
    <section className="ofertas_section">

        <div className="ofertas-title">
            <h2 className="ofertas-title__h2">{ title }</h2>
            <a className="ofertas-title__anchor" href="">Ver todas</a>
        </div>
        
        <Swiper
            slidesPerView={1}
            slidesPerGroupSkip={1}
            spaceBetween={16}        
            breakpoints={{
              523: {
                slidesPerView: 2,
                slidesPerGroup: 2
              },
              771: {
                slidesPerView: 3,
                slidesPerGroup: 3
              },
              1026: {
                slidesPerView: 4,
                slidesPerGroup: 4
              },
              1287: {
                slidesPerView: 5,
                slidesPerGroup: 5
              },
            }}
            navigation={true}
            modules={[Keyboard, Scrollbar, Navigation]}
            className="mySwiper"
        >
          
            { 
                productosEnOferta.slice(0, 20).map(producto => {
                    return (
                        <SwiperSlide key={ producto.id}>
                            <ProductoContainer
                                id={producto.id}
                                img={producto.id}
                                title={producto.title}
                                price={producto.price}
                                descuento={producto.discounts}
                                cuotas={producto?.installments.quantity}
                                envio='Envío gratis'
                                precioCuota={convertToCurrencyFormat(producto.installments.amount)}
                            />
                        </SwiperSlide>
                    ) }) 
            } 
        </Swiper>   
        
    </section>
  )
}
