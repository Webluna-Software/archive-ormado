import React from 'react'
import img from "../assets/img/pngwing1.png"

const GiftCard = () => {

    const cards = [
        {
          title: "Gift Card",
          description: ["Aenean eleifend ante", "maecenas pulvinar", "montes lorem et pede dis", "dolor pretium"],
          background: "brown",
          showImage: true,
        },
        {
          title: "50%",
          description: ["Aenean eleifend ante", "maecenas pulvinar", "montes lorem et pede dis", "dolor pretium"],
          background: "yellow",
          showImage: false,
        },
      ];
    const giftCards = [
        {
          title: "Integer Maecenas Eget Viverra",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet..."
        },
        {
          title: "Curabitur Ullamcorper Ultrices",
          content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
        },
        {
          title: "Nunc Viverra Est Sapien",
          content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip..."
        }
      ];
  return (
    <>
    <section className='GiftCard '>
       <div className="coffee-beans bean-1"></div>
        <div className="coffee-beans bean-2"></div>
        <div className="coffee-beans bean-3"></div>
        <div className="coffee-beans bean-4"></div>
        <div className="container-fluid">
            <div className="row cards">
               <div className="gift-cards">
                    <div className="card img-card  col-12 col-md-5 col-sm-6 " >
                        <div className=" card-content">
                          <h2 className="card-title">Gift Card</h2>
                          <ul className="card-description">
                            <li>Aenean eleifend ante </li>
                            <li>maecenas pulvinar</li>
                            <li>montes lorem et pede dis</li>
                            <li>dolor pretium</li>
                          </ul>
                        </div>
                       <div className=" col-3 card-image" >
                       <img src={img} alt="Coffee Cup" className="coffee-image" />
                     </div>
                </div>
                <div className="card basic-card col-12 col-md-5 col-sm-6  " >
                        <div className="card-content">
                          <h2 className="card-title"> 50%</h2>
                          <ul className="card-description">
                          <li>Aenean eleifend ante </li>
                            <li>maecenas pulvinar</li>
                            <li>montes lorem et pede dis</li>
                            <li>dolor pretium</li>
                          </ul>
                        </div>
                        <div className="moon-container">
                          <div className="moon" />
                          <div className="moon-overlay" />
                        </div>


                </div>
            </div>
            <div className="row text-row ">
                {giftCards.map((card, index) => (
                  <div className="content" key={index}>
                    <p className="title">{card.title}</p>
                    <div className="content-box">
                      <p className="content-text">{card.content}</p>
                    </div>
                  </div>
                ))}
            </div>
            </div>
        </div>
    </section>



    </>
  )
}

export default GiftCard