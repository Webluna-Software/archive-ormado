import BestOffer from "../components/home/BestOffer"
import Cakes from "../components/home/Cakes"
import Clients from "../components/home/Clients"
import EnjoyOurCoffee from "../components/home/EnjoyOurCoffee"
import Faq from "../components/home/Faq"
import Franchise from "../components/home/Franchise"
import NewSweets from "../components/home/NewSweet"
import OrmadoKaffehaus from "../components/home/OrmadoKaffehaus"
import OurRecentBlog from "../components/home/OurRecentBlog"
import PaymentsWithMpay from "../components/home/PaymentsWithMpay"
import Testimonials from "../components/home/Testimonials"
import WhyUs from "../components/home/WhyUs"
import YourOrmado from "../components/home/YourOrmado"
import {testimonalsforhome} from '../data/data';
const Home = () => {
  return (
    <>
     <OrmadoKaffehaus/>
      <EnjoyOurCoffee/>
      <YourOrmado />
      <Testimonials senddata={testimonalsforhome} />
      <Clients />
      <WhyUs />
      <NewSweets />
      <Cakes />
      <Franchise />
      <Faq/>  
      
      {/* <OurRecentBlog/> */}
      <PaymentsWithMpay/>
    </>
  )
}

export default Home