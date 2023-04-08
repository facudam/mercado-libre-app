import { Swiper, SwiperSlide } from 'swiper/react';
import {  Keyboard, Scrollbar, Navigation } from "swiper";
import { getProductsBySeller } from '../helpers/getProductsBySeller';
import { useEffect, useState } from 'react';



export const SellerSlide = ({ id }) => {

    const [ listaProductos, setListaProductos ] = useState([])

    const getSellerProducts = async() => {
        const list = await getProductsBySeller(id)
        setListaProductos(list.results)
        console.log(list)
    }

    useEffect(() => {
        getSellerProducts()
    }, [])
  if (!listaProductos) return;
  return (
    <div className='seller-slide'>
        <h2>Publicaciones del vendedor</h2>
        <Swiper
            slidesPerView={3}
            slidesPerGroupSkip={3}
            spaceBetween={10}
            navigation={true}
            modules={[Keyboard, Scrollbar, Navigation]}
        >
            {
                listaProductos.map(item => (
                    <div key={item.id}>
                        <p>{ item.title }</p>
                    </div>
                ))
            }
        </Swiper>
        <a>Ver más publicaciones del vendedor</a>
    </div>
  )
}
