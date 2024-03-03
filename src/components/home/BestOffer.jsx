import React, { useContext, useEffect, useState } from 'react'
import BestOfferImg from '../../assets/img/BestOfferimg.png'
import axios from 'axios'
import ApiLinkContext from '../../context/ApiLinkContext'

const BestOffer = () => {
  const [cartData, setCartData] = useState()
  const { ApiLink } = useContext(ApiLinkContext);
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState()


  useEffect(() => {
    axios.get(`${ApiLink}/product`)
      .then((res) => {
        console.log(res.data, 'productdata')
        setCartData(res.data.products);
        setloading(false)
      })

      .catch(() => {
        setloading(false)
        seterror(true)
      })
  }, [])

  console.log("BUDUR:", cartData);
  // console.log("uzunluq:",cartData.length);
  console.log("yoxlama:", cartData);
  return (
    <>
      <div className="bestOffer ">
        <div className="bestoffer-text">
          <div className="text-main">
            <h1>GET THE BEST <span>OFFER</span></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim. Faucibus amet etiam </p>
          </div>
        </div>
        <div className="bestOffer-main mb-5">

          <div className="bestOffer-main-row">
            <div className="bestOffer-img  ">
              <div className="img-main ms-5">
                <div className=" bestofferImg">
                <img className='bestofferImg' src={BestOfferImg} alt="error" />
                </div>
                <div className="background"></div>
                <div className="card-main">
                  <div className="card-main-text">
                    <h1> Coffee Time <br /></h1>
                    <h3 className='mb-5'><i className='me-2 '>30%</i>  OFF</h3>
                    <p className='mb-4'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.</p>
                    <div className='bestOffer-img-btn mb-3'><b>Order Now</b> <i class="fa-solid fa-arrow-right ms-2"></i> </div>
                  </div>
                </div>
              </div>
            </div>


            {console.log(cartData, "deneme")}

            <div className="bestOffer-card row">
              <div className='bestOffer-seeall d-flex'>
                <p>See all</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.5" d="M4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75V11.25ZM4 12.75H20V11.25H4V12.75Z" fill="#D59729" />
                  <path d="M14 6L20 12L14 18" stroke="#D59729" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </div>
              <div className="row" >
                {
                  loading ? <h1>loading....</h1>
                    :
                    error ? <h1>error..</h1>

                      :
                      //   cartData.length ==0 ? <h1>empty</h1>

                      //   :
                      <>
                        {cartData.slice(0, 3).map((item) => (
                          <div className='card-part2 '>
                            <div className="card-img col-md-3 col-lg-3 " >
                              <img src={item.coverImage[0]} className="img-fluid rounded-start " alt="..." />
                            </div>
                            <div className="card-body-main col-md-8 d-flex justify-content-center">
                              <div className="card-main-text">
                                <h4 className="card-title mb-1">{item.title}</h4>
                                <p className='card-price'>${item.firstPrice} </p>
                                <p className="card-text ">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet. consectetur adipiscing elit. </p>
                              </div>

                            </div>
   
                          </div>
                        ))}
                      </>
                }

                {/* {cartData.map((item)=>(
                  <div className='card-part2'>
                  <div className="card-img col-md-3 col-lg-3 " >
                   <img src={item.coverImage[0]}className="img-fluid rounded-start m-1" alt="..." />
                  </div>
                  <div className="card-body col-md-8 d-flex align-items-center justify-content-center">
                  <div className="card-body-main">
                    <div className="card-text-main">
                      <h4 className="card-title"><b>{item.title}</b></h4>
                      <div className="line mx-2">
                        <div className="line-main "></div>
                      </div>
                      <div className="card-price">
                        <b><i>$ </i>{item.firstPrice}</b>
                      </div>
                    </div>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  
                  </div>
                </div>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BestOffer