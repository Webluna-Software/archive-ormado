import React from 'react'
import Contactlocation from '../components/contact/Contactlocation'
import Contactcards from '../components/contact/Contactcards'
import background from '../assets/img/Frame.png'
import card from '../assets/img/Rectangle.png'
const SearchBranch = () => {
  return (
    <div className='reserve'>
        <div className="Reverse-title col-12 col-md-12 col-sm-12">
                    <div className="first-card-img">
                        <img className='img-fluid col-12 col-md-12 col-sm-12' src={card} alt="" />
                    </div>
                    <img className='background img-fluid' src={background} alt="" />
                    <div className='firtst-card-title'>
                        <p >Search a brnach</p>
                    </div>
                </div>
      <Contactlocation />
      <Contactcards />

    </div>
  )
}

export default SearchBranch