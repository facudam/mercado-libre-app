import { Swiper, SwiperSlide } from 'swiper/react';
import {  Keyboard, Scrollbar, Navigation } from "swiper";
import { getProductsBySeller } from '../helpers/getProductsBySeller';
import { useEffect, useState } from 'react';
import '../styles/SellerSlide.css'
import { SellerProductContainer } from './SellerProductContainer';



export const SellerSlide = ({ id }) => {

    const [ listaProductos, setListaProductos ] = useState([])
    

    const getSellerProducts = async() => {
        const list = await getProductsBySeller(id)
        setListaProductos(list.results)
    }

    

    useEffect(() => {
        getSellerProducts()
    }, [ listaProductos ])
  
  return (
    <div className={`seller-slide`}>
        <h2>Publicaciones del vendedor</h2>
        <div className='slider-caja'>
        <Swiper
            slidesPerView={3}
            slidesPerGroupSkip={3}
            spaceBetween={0}
            navigation={true}
            modules={[Keyboard, Scrollbar, Navigation]}
            className="seller-slider"
        >
            {   (!listaProductos) ? <p>...Cargando</p>
                    : listaProductos.slice(0, 21).map(item => (
                        <SwiperSlide key={ item.id } style={{width: "220px"}}>
                            <SellerProductContainer
                                id={ item.id } 
                                title={ item.title } 
                                price={ item.price } 
                            />
                        </SwiperSlide>
                        
                ))
            }
        </Swiper>
        </div>
        <a>Ver más publicaciones del vendedor</a>
    </div>
  )
}
