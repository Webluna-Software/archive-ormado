import React from 'react'
import HeadlineImg from '../../assets/img/product-information.png'
import ProductInfoImg from '../../assets/img/product-information-img.png'
// import Faq from '../../components/home/Faq';
const ProductInformation = () => {
    return (
      <>
      <section className='product-information-page'>
        <div className="product-information-headline">
          <div className="image-container">
            <img src={HeadlineImg} alt="Banner Image" className='img-fluid' />
            <div className="image-overlay">
                <h3>NUTRITION AND ALLERGENS</h3>
            </div>
          </div>
        </div>

          <div className="product-information-context my-5 pt-lg-5">
            <div className="img-context">
                <img src={ProductInfoImg} alt="Product  Image" className='img-fluid' />
            </div>
            <div className="text-context">
                <h3>Product <span>information</span></h3>
                <p>
                Voluptatem quos dolor atque quia aut aut molestiae libero quam. Dignissimos dolores asperiores iste ut quisquam incidunt a qui pariatur. Et delectus id voluptas asperiores eaque et voluptatum. Consequatur iure dolores eum eos voluptas explicabo odit sint reiciendis. Ipsa maxime nobis pariatur harum enim. Sint aperiam natus dolor iusto.
                <br /> <br />
                Quisquam et quasi necessitatibus tempora occaecati autem ratione. Alias commodi commodi illum et repudiandae. Ipsum sint voluptates. Corrupti inventore dicta suscipit ea dolorem perspiciatis exercitationem et. Possimus est iusto.
                <br /> <br />
                Velit quam eos unde. Autem unde aut explicabo quia aut. Enim voluptates eligendi. Unde aspernatur sint voluptatibus tempore at veniam quae laboriosam. Assumenda cumque eveniet.
                </p>
                <button>Back to previous page</button>
            </div>
          </div>
      </section>
      {/* <Faq/> */}
      </>
    );
  };


export default ProductInformation