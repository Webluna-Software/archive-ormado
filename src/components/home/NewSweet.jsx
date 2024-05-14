import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { EffectFade,Pagination } from 'swiper/modules';
import 'swiper/css/effect-fade';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import newsweetimg from '../../assets/img/NewSweet.png';

const NewSweets = () => {
  const [sliderData,setSliderData] = useState([])
  useEffect(()=>{
    axios.get("https://ormado.webluna.space/api/client/slider")
    .then((res)=>{
      console.log(res.data.data, "SLIDER")
      setSliderData(res.data.data)
    }) 
  },[])
  return (
    <>
    <div className='new-sweet my-5'>
        <div>
      <Swiper
        spaceBetween={30}
        effect={'fade'}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade,Pagination]}
        className="mySwiper3 "
      >
 {
//   sliderData.map((fd)=>(
//     <SwiperSlide className='swiper-slide'>
//     <div className="swiper-main">
//       <div className="img">
//       <img src="https://ormado.webluna.org/cdn/img/Rectangle603.png" alt="" /> 
//       </div>
//       <div className="swiper-background"></div>
//       <div className="swiper-text container">
//         <h1 className='mb-3 ms-3'>NEW <span>SWEETS</span></h1>
//         <p className='ms-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam </p>
//     </div>
//     </div>

//     </SwiperSlide>
//   ))
 }
        <SwiperSlide>
        <div className="swiper-main">
             <div className="img">
                <img src={newsweetimg} alt="" /> 
              </div>
              <div className="swiper-background"></div>
              <div className="swiper-text container">
                <h1 className='mb-3'>NEW <span>SWEETS</span></h1>
                <p>You can be sure that you will meet new desserts every time you visit our coffee shop. Don't miss the chance to get acquainted with our delicious desserts that are updated every day.</p>
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    </>
  )
}

export default NewSweets


