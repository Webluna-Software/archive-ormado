// import React, { useRef } from 'react'
import img from '../assets/img/&.png'
import { Link } from 'react-router-dom'
import franchise from "../assets/img/franchisebanner.jpg"
import Testimonials from '../components/home/Testimonials'
import Faq from '../components/home/Faq'
import cardimg1 from '../assets/img/1.jpg'
import cardimg2 from '../assets/img/2.jpg'
import cardimg3 from '../assets/img/3.jpg'
import { testimonalsforfranchise } from '../data/data'
import Franchisepdf from '../assets/img/Franchise.pdf'
const Franchise = () => {
  return (
    <div >
      <section className="franchise-mobile d-none" >
      <div className="bg-clr">
      <p>
          WHY <span className="ormado">ORMADO</span> FRANCHISE ?
        </p>
        <p>
          If you&apos;re considering starting your own business in the coffee industry, Ormado Kaffeehause can be the best choice, offering comprehensive knowledge from A to Z.
        </p>
        <div className="ormado-button">
              <Link to="/franchiseform"><button className="ormado-button">INQUIRE NOW</button></Link>
            </div>
      </div>

      </section>
      <section className="myfranchise">
      
        <div className="franc-con">
          <div className="left">

            <div className="text">
              <p>
                WHY <span className="ormado">ORMADO</span> FRANCHISE ?
              </p>
            </div>

            <div className="ormado-about">
              <p>
                If you&apos;re considering starting your own business in the coffee industry, Ormado Kaffeehause can be the best choice, offering comprehensive knowledge from A to Z.
              </p>
            </div>
            <div className="ormado-button">
              <Link to="/franchiseform"><button>INQUIRE NOW</button></Link>
            </div>
          </div>

          <div className="right">
            <img className="img-fluid" src={franchise} alt="" />
          </div>
        </div>
        <div className="roasting">
          <h3 className="ms-1 my-5">
            <font color="#D59729">We provide everything you need for a successful business  </font>
          </h3>
          <p className="ms-1 w-50">
          Based on mutual agreement, we share and provide mentorship on all the necessary information required for a successful and risk-free start to the business. This includes interior design, furnishings, beverage and dessert menus, and more.
          </p>

          <div className="franchise-cards mb-5">
            <div className="row">
              <img className='img' src={cardimg1} alt="" />
              <img src={cardimg2} alt="" />
              <img src={cardimg3} alt="" />
            </div>
          </div>
        </div>

      </section>

      <Testimonials senddata={testimonalsforfranchise} />
      <div className="franchisecompany">
        <div className="franchisecompany-part1-text mb-2">
          <p>Based on mutual agreement, we share and provide mentorship on all the necessary information required for a successful and risk-free start to the business. This includes interior design, furnishings, beverage and dessert menus, and more.</p>
          <h1>Franchise company <br /> <span>Ormado Kaffeehaus</span></h1>
        </div>
        <div className="franchisecompany-card ">
          <div className="recommendations">
            <div className="recommendations-icon mt-2">
              {/* <img src="" alt="err" /> */}
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M27.7433 59.9498L28.4768 58.7106C29.6523 56.7246 30.2401 55.7315 31.1764 55.1777C32.1127 54.6238 33.334 54.5848 35.7767 54.5066C38.067 54.4334 39.6064 54.2335 40.9226 53.6884C43.6936 52.5405 45.8953 50.3389 47.0431 47.5678C47.9039 45.4895 47.9039 42.8548 47.9039 37.5853V35.3234C47.9039 27.9194 47.9039 24.2174 46.2374 21.4979C45.3049 19.9761 44.0255 18.6967 42.5038 17.7642C39.7842 16.0977 36.0822 16.0977 28.6782 16.0977H21.8927C14.4887 16.0977 10.7867 16.0977 8.06717 17.7642C6.54545 18.6967 5.26603 19.9761 4.33352 21.4979C2.66699 24.2174 2.66699 27.9194 2.66699 35.3234V37.5853C2.66699 42.8548 2.66699 45.4895 3.52786 47.5678C4.67568 50.3389 6.87729 52.5405 9.64837 53.6884C10.9645 54.2335 12.5039 54.4334 14.7942 54.5066C17.2368 54.5848 18.4581 54.6238 19.3944 55.1777C20.3307 55.7315 20.9185 56.7246 22.094 58.7106L22.8275 59.9498C23.9204 61.7962 26.6505 61.7962 27.7433 59.9498ZM35.1811 38.7161C36.7425 38.7161 38.0084 37.4503 38.0084 35.8888C38.0084 34.3273 36.7425 33.0615 35.1811 33.0615C33.6196 33.0615 32.3537 34.3273 32.3537 35.8888C32.3537 37.4503 33.6196 38.7161 35.1811 38.7161ZM28.1128 35.8888C28.1128 37.4503 26.8469 38.7161 25.2855 38.7161C23.724 38.7161 22.4582 37.4503 22.4582 35.8888C22.4582 34.3273 23.724 33.0615 25.2855 33.0615C26.8469 33.0615 28.1128 34.3273 28.1128 35.8888ZM15.3899 38.7161C16.9514 38.7161 18.2172 37.4503 18.2172 35.8888C18.2172 34.3273 16.9514 33.0615 15.3899 33.0615C13.8284 33.0615 12.5626 34.3273 12.5626 35.8888C12.5626 37.4503 13.8284 38.7161 15.3899 38.7161Z" fill="#D59729" />
                <path opacity="0.5" d="M41.2957 2.66797C44.674 2.66795 47.3605 2.66793 49.5151 2.87279C51.7243 3.08284 53.5922 3.52315 55.2562 4.54282C56.9681 5.5919 58.4075 7.03126 59.4565 8.74319C60.4762 10.4072 60.9165 12.275 61.1266 14.4843C61.3314 16.6388 61.3314 19.3255 61.3314 22.7038V25.0112C61.3314 27.4154 61.3314 29.3279 61.2256 30.8787C61.1173 32.4652 60.8913 33.8275 60.3629 35.1032C59.0716 38.2207 56.5948 40.6975 53.4773 41.9888C53.3994 42.0211 53.321 42.0523 53.2423 42.0824C52.8661 42.2262 52.5435 42.3495 52.2605 42.4413H47.8601C47.9033 41.1106 47.9033 39.5257 47.9033 37.5827V35.3208C47.9033 27.9168 47.9033 24.2148 46.2368 21.4953C45.3043 19.9735 44.0248 18.6941 42.5031 17.7616C39.7836 16.0951 36.0816 16.0951 28.6776 16.0951H21.892C19.2643 16.0951 17.1028 16.0951 15.2861 16.1696V11.7685C15.3734 11.4662 15.4929 11.1197 15.6331 10.713C15.8717 10.0213 16.1733 9.36714 16.5556 8.7432C17.6047 7.03125 19.044 5.5919 20.756 4.54282C22.4199 3.52315 24.2878 3.08284 26.497 2.87279C28.6516 2.66793 31.3382 2.66795 34.7165 2.66797H41.2957Z" fill="#D59729" />
              </svg>

            </div>
            <div className="recommendations-text">
              <h4>Recommendations</h4>
              <p>We will be happy to consult you during discussion of your options. We will help you succeed by means of the area analysis, work aspects, and our experience.</p>
            </div>
          </div>
          <div className="part2">
            <img src={img} alt="error" />
          </div>
          <div className="termConditions">
            <div className="termConditions-icon mt-2">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M8 26.6654C8 16.6087 8 11.5804 11.1242 8.45623C14.2484 5.33203 19.2767 5.33203 29.3333 5.33203H34.6667C44.7233 5.33203 49.7516 5.33203 52.8758 8.45623C56 11.5804 56 16.6087 56 26.6654V37.332C56 47.3887 56 52.417 52.8758 55.5412C49.7516 58.6654 44.7233 58.6654 34.6667 58.6654H29.3333C19.2767 58.6654 14.2484 58.6654 11.1242 55.5412C8 52.417 8 47.3887 8 37.332V26.6654Z" fill="#D59729" />
                <path d="M44.0504 44.0048C44.5171 43.6408 44.9403 43.2175 45.7868 42.371L56.3399 31.818C56.595 31.5628 56.4783 31.1234 56.1374 31.0051C54.8917 30.5729 53.2713 29.7616 51.7555 28.2458C50.2397 26.73 49.4284 25.1096 48.9962 23.8639C48.8779 23.5231 48.4385 23.4063 48.1833 23.6614L37.6303 34.2145L37.6302 34.2145C36.7838 35.061 36.3605 35.4843 35.9965 35.9509C35.5671 36.5014 35.199 37.0971 34.8986 37.7273C34.644 38.2616 34.4547 38.8295 34.0762 39.9652L33.587 41.4327L32.8092 43.7661L32.0799 45.9541C31.8936 46.513 32.039 47.1291 32.4556 47.5457C32.8722 47.9623 33.4883 48.1077 34.0472 47.9214L36.2352 47.1921L38.5686 46.4143L40.0361 45.9251L40.0362 45.9251C41.1719 45.5466 41.7397 45.3573 42.274 45.1027C42.9042 44.8023 43.4999 44.4342 44.0504 44.0048Z" fill="#D59729" />
                <path d="M59.6441 28.5138C61.8964 26.2614 61.8964 22.6096 59.6441 20.3572C57.3917 18.1049 53.7399 18.1049 51.4875 20.3572L51.1482 20.6965C50.987 20.8578 50.9063 20.9384 50.8423 21.0462C50.7682 21.171 50.7151 21.3404 50.7047 21.4851C50.6957 21.6102 50.7152 21.7191 50.7543 21.9369L50.7543 21.9369C50.8058 22.2236 50.9011 22.6427 51.0747 23.1428C51.4216 24.143 52.0769 25.4559 53.3112 26.6902C54.5454 27.9244 55.8583 28.5797 56.8585 28.9267C57.3586 29.1002 57.7777 29.1955 58.0644 29.247C58.2822 29.2861 58.3911 29.3056 58.5162 29.2966C58.6609 29.2862 58.8303 29.2331 58.9551 29.159C59.0629 29.095 59.1435 29.0143 59.3048 28.8531L59.3048 28.8531L59.6441 28.5138Z" fill="#D59729" />
                <path fillRule="evenodd" clipRule="evenodd" d="M19.333 24C19.333 22.8954 20.2284 22 21.333 22H38.6663C39.7709 22 40.6663 22.8954 40.6663 24C40.6663 25.1046 39.7709 26 38.6663 26H21.333C20.2284 26 19.333 25.1046 19.333 24ZM19.333 34.6667C19.333 33.5621 20.2284 32.6667 21.333 32.6667H29.333C30.4376 32.6667 31.333 33.5621 31.333 34.6667C31.333 35.7712 30.4376 36.6667 29.333 36.6667H21.333C20.2284 36.6667 19.333 35.7712 19.333 34.6667ZM19.333 45.3333C19.333 44.2288 20.2284 43.3333 21.333 43.3333H25.333C26.4376 43.3333 27.333 44.2288 27.333 45.3333C27.333 46.4379 26.4376 47.3333 25.333 47.3333H21.333C20.2284 47.3333 19.333 46.4379 19.333 45.3333Z" fill="#D59729" />
              </svg>
            </div>
            <div className="termConditions-text">
              <h4>Terms and conditions</h4>
              <ul>
                <li>Admission fee: starting from 25,000 EUR;</li>
                <li>Investment up to 900 EUR per square meter (including VAT);</li>
                <li>Franchise fee: 5% (every month since launch).</li>
              </ul>
            </div>

          </div>
        </div>
        <div className="franchisecompany-btns">
          <div className="part1">
            <p>You can download the presentation for more details.</p>
           <a href={Franchisepdf} download="Franchise"> 
           <button className='button'>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" fillRule="evenodd" clipRule="evenodd" d="M3 14.25C3.41421 14.25 3.75 14.5858 3.75 15C3.75 16.4354 3.75159 17.4365 3.85315 18.1919C3.9518 18.9257 4.13225 19.3142 4.40901 19.591C4.68577 19.8678 5.07435 20.0482 5.80812 20.1469C6.56347 20.2484 7.56459 20.25 9 20.25H15C16.4354 20.25 17.4365 20.2484 18.1919 20.1469C18.9257 20.0482 19.3142 19.8678 19.591 19.591C19.8678 19.3142 20.0482 18.9257 20.1469 18.1919C20.2484 17.4365 20.25 16.4354 20.25 15C20.25 14.5858 20.5858 14.25 21 14.25C21.4142 14.25 21.75 14.5858 21.75 15V15.0549C21.75 16.4225 21.75 17.5248 21.6335 18.3918C21.5125 19.2919 21.2536 20.0497 20.6517 20.6516C20.0497 21.2536 19.2919 21.5125 18.3918 21.6335C17.5248 21.75 16.4225 21.75 15.0549 21.75H8.94513C7.57754 21.75 6.47522 21.75 5.60825 21.6335C4.70814 21.5125 3.95027 21.2536 3.34835 20.6517C2.74643 20.0497 2.48754 19.2919 2.36652 18.3918C2.24996 17.5248 2.24998 16.4225 2.25 15.0549C2.25 15.0366 2.25 15.0183 2.25 15C2.25 14.5858 2.58579 14.25 3 14.25Z" fill="#ffffff" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 16.75C12.2106 16.75 12.4114 16.6615 12.5535 16.5061L16.5535 12.1311C16.833 11.8254 16.8118 11.351 16.5061 11.0715C16.2004 10.792 15.726 10.8132 15.4465 11.1189L12.75 14.0682V3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3V14.0682L8.55353 11.1189C8.27403 10.8132 7.79963 10.792 7.49393 11.0715C7.18823 11.351 7.16698 11.8254 7.44648 12.1311L11.4465 16.5061C11.5886 16.6615 11.7894 16.75 12 16.75Z" fill="#ffffff" />
                </svg>
                <p>Franchise Presentation EN</p>
              </button>
           </a>
          </div>
          <div className="part2">
            <p>If you still haven&apos;t found answers to the questions that interest you, then fill out the forum and we will contact you!</p>
            <Link to="/franchiseform"onClick={()=>{window.scrollTo({top:0,
                    behavior:"smooth"
                    })}}><button><p>Send a request</p></button></Link>
          </div>
        </div>
      </div>
      <Faq />
    

    </div>
  )
}

export default Franchise