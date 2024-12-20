import React from 'react'
import img from "../assets/img/DeliveryImg.webp"
import img2 from "../assets/img/wolt.webp"
import img3 from "../assets/img/uber.webp"
import img4 from "../assets/img/dhl.webp"
const Delivery = () => {
    const brands = [
        { src: img2, alt: "Wolt" },
        { src: img3, alt: "Uber" },
        { src: img4, alt: "DHL" },
    ];

    // data.js
    const faqData = [
    {
        question: "How do I order Ormado Kaffehaus delivery?",
        answer: "You can order Ormado Kaffehaus delivery through <a href='#'>DoorDash</a>, <a href='#'>Uber Eats</a> or <a href='#'>Grubhub</a>."
    },
    {
        question: "Can I get the full menu of items available at my local Ormado Kaffehaus store delivered?",
        answer: "To maintain the high standards of quality and consistency we know you expect from us, we’ve optimized our menu for Ormado Kaffehaus delivery. Consequently, select items are currently unavailable for Ormado Kaffehaus delivery."
    },
    {
        question: "Can I pay for Ormado Kaffehaus delivery with my Ormado Kaffehaus card or through the Ormado Kaffehaus app?",
        answer: "Paying for delivery with a OrmadoKaffehaus Card or app isn’t supported at this time. We encourage you to place an order for Ormado Kaffehaus delivery using the DoorDash app, the Uber Eats app or the Grubhub app (all available in select markets); you can always use the OrmadoKaffehaus app to order ahead with Mobile Order and Pay and pick up your treats at a participating store."
    },
    {
        question: "Will I earn stars when I order Ormado Kaffehaus delivery?",
        answer: "Ormado Kaffehaus delivery is currently not eligible for Ormado Kaffehaus Rewards benefits. Learn more about Ormado Kaffehaus Rewards benefits <a href='#'>here</a>."
    },
    {
        question: "Is Ormado Kaffehaus delivery available near me?",
        answer: "To find out if Ormado Kaffehaus delivery is available where you are, check the <a href='#'>DoorDash</a>, <a href='#'>Uber Eats</a> or <a href='#'>Grubhub</a> apps."
    },
    {
        question: "What do I do if I have an issue with my Ormado Kaffehaus delivery?",
        answer: "Depending on which marketplace you ordered through, please go to the Help section of that specific app or you can reach them directly:",
        contacts: [
            { name: "DoorDash", contact: "1-855-431-0459" },
            { name: "Uber Eats", contact: "1-800-253-9377" },
            { name: "Grubhub", contact: "<a href='#'>Online Chat</a>" }
        ]
    },
    {
        question: "What if I want to pick up my Ormado Kaffehaus delivery order in the store?",
        answer: "Ormado Kaffehaus delivery isn't available for pick up in an OrmadoKaffehaus store. However, you can still order on the Ormado Kaffehaus app with Mobile Order and Pay and pick up your favorite treats at a participating store. Click <a href='#'>here</a> to learn more."
    }
];

  return (
    <>
    <section className='Delivery'>
    <div className="container-fluid">
    <div className="section-title">
    <h2 > <span className='yellow-span'>Ormado</span> <span className='brown-span'> KaffeHaus</span>  <span className='dark-span'>Delivers</span></h2>
    <p>Today deserves delivery</p>
    </div>
                <div className="section-banner">
                        <div className="row ">
                          <div className="text-part  col-12 col-sm-6 col-md-6">
                          <h2 >Your <span> coffee</span> is on its way</h2>
                          <p className=" body-text ">Uber Eats and let your favorites come to you.</p>
                          </div>
                          <div className="img-part  col-12 col-sm-6 col-md-6">
                            <img src={img} className="d-block mx-lg-auto img-fluid" alt="Delivery Image"  loading="lazy" />
                          </div>
                        </div>
                </div>

                <div className="section-brand">
                    <div className="row">
                    {brands.map((brand, index) => (
                            <div className="brand col-12 col-sm-6 col-md-5 " key={index}>
                                <img src={brand.src} alt={brand.alt} />
                            </div>
                        ))}
                         <div className=" brand endbrand  col-12 col-sm-6 col-md-5" >
                         <h2>Your <span> coffee</span> is on its way</h2>
                         <p className=" body-text ">Uber Eats and let your favorites come to you.</p>
                        </div>
                    </div>
                </div>
                <div className="section-text">
                    <div className="row">
                        <div className="text">
                          <p>Questions? We’ve got answers.</p>
                          {faqData.map((item, index) => (
                                <div className='text'  key={index}>
                                    <p className="question">{item.question}</p>
                                    <p className="answer" dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                                    {item.contacts && (
                                        <ul>
                                            {item.contacts.map((contact, i) => (
                                                <li key={i}>{contact.name}: <span dangerouslySetInnerHTML={{ __html: contact.contact }}></span></li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>



            </div>
    </section>
    </>
  )
}

export default Delivery