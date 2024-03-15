import React, { useContext, useEffect, useState } from 'react'
import ApiLinkContext from '../../context/ApiLinkContext'
import axios from 'axios'
import { Link } from 'react-router-dom'

const YourOrmado = () => {
  const {ApiLink} = useContext(ApiLinkContext)
  const [products,setProducts] = useState([])

  useEffect(()=>{
   axios.get(`${ApiLink}/product`)
   .then((res)=>{
     setProducts(res.data.products)
     console.log(res.data.products ,"Products Data")
   })
  },[])
  return (
    <div className='yourormado-div my-5'>
      <h3>Your <span>Ormado</span></h3>
      <div className="yourormado-products row g-3">
        {products.map((fd,i)=>(
          <div className="col-12 col-sm-6 col-md-3">
          <div className="card w-100" key={i}>
          <Link to={`/productsdetails/${fd._id}`}><img src={fd.coverImage} className="card-img-top py-5" alt="..." /></Link>
            <div className="wishlist-modal">
            <div className="addtowishlist-box mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.62436 4.42508C3.96537 5.18341 2.75 6.98712 2.75 9.13799C2.75 11.3354 3.64922 13.0291 4.93829 14.4807C6.00072 15.677 7.28684 16.6685 8.54113 17.6355C8.83904 17.8652 9.13515 18.0935 9.42605 18.3228C9.95208 18.7375 10.4213 19.1014 10.8736 19.3657C11.3261 19.6301 11.6904 19.7509 12 19.7509C12.3096 19.7509 12.6739 19.6301 13.1264 19.3657C13.5787 19.1014 14.0479 18.7375 14.574 18.3228C14.8649 18.0935 15.161 17.8652 15.4589 17.6355C16.7132 16.6685 17.9993 15.677 19.0617 14.4807C20.3508 13.0291 21.25 11.3354 21.25 9.13799C21.25 6.98712 20.0346 5.18341 18.3756 4.42508C16.7639 3.68836 14.5983 3.88346 12.5404 6.02162C12.399 6.16852 12.2039 6.25152 12 6.25152C11.7961 6.25152 11.601 6.16852 11.4596 6.02162C9.40166 3.88346 7.23607 3.68836 5.62436 4.42508ZM12 4.4597C9.68795 2.39113 7.09896 2.10176 5.00076 3.06085C2.78471 4.07381 1.25 6.42592 1.25 9.13799C1.25 11.8035 2.3605 13.8369 3.81672 15.4767C4.98287 16.7898 6.41022 17.8888 7.67083 18.8595C7.95659 19.0795 8.23378 19.2929 8.49742 19.5008C9.00965 19.9046 9.55954 20.3352 10.1168 20.6608C10.6739 20.9863 11.3096 21.2509 12 21.2509C12.6904 21.2509 13.3261 20.9863 13.8832 20.6608C14.4405 20.3352 14.9903 19.9046 15.5026 19.5008C15.7662 19.2929 16.0434 19.0795 16.3292 18.8595C17.5898 17.8888 19.0171 16.7898 20.1833 15.4767C21.6395 13.8369 22.75 11.8035 22.75 9.13799C22.75 6.42592 21.2153 4.07381 18.9992 3.06085C16.901 2.10176 14.3121 2.39113 12 4.4597Z" fill="#4A3024" />
                  </svg>
                </div>
              <Link to={`/productsdetails/${fd._id}`}><div className="quick-view">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path opacity="0.5" d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12Z" fill="#4A3024" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12ZM9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z" fill="#4A3024" />
                </svg>
              </div>
              </Link>
            </div>
            <div className="card-body">
              <h5 className="card-title">{fd.title}</h5>
              <div className="rating-stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
              </div>
              <div className="price-addtocart">
                <div className="price-box">
                <span><del>${fd.price}</del></span>
                  <p>${fd.salePrice}</p>
                </div>
          
              </div>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default YourOrmado