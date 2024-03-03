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
                  <span><del>${fd.firstPrice}</del></span>
                  <p>${fd.lastPrice}</p>
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