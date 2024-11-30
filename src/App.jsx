import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import OrderDetails from './pages/OrderDetails';
import Wishlist from './pages/Wishlist';
import Products from './pages/Products';
import ProductDetails from './components/Products/ProductDetails';
import ProductInformation from './components/Products/ProductInformation';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';
import Reserve from './pages/Reserve';
import LogIn from './pages/LogIn';
import FranchiseForm from './pages/FranchiseForm';
import OurStory from './pages/OurStory';
import Vacancy from './pages/Vacancy';
import VacancyDetail from './pages/VacancyDetail';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';
import CareerForm from './pages/CareerForm';
import CareerPage from './pages/CareerPage';
import SignUp from './pages/SignUp';
import ForgotPass from './pages/ForgotPass';
import SearchBranch from './pages/SearchBranch';
import Franchise from './pages/Franchise';
import Faq from './components/home/Faq';
import Gallery from './pages/Gallery';
import Order from './pages/account/Order';
import Password from './pages/account/Password';
import Account from './pages/account/Account';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import ResetPassword from './pages/ResetPassword';
import TermsandConditions from './pages/TermsandConditions';
// import StickyCookie from './components/home/StickyCookie';
import CampaignPage from './pages/campaign/CampaignPage';
import Delivery from './pages/Delivery';
import GiftCard from './pages/GiftCard';
import CorporateSocialRes from './pages/CorporateSocialRes';
import CampaignDetails from './pages/campaign/CampaignDetails';

const App = () => {
    const navigate = useNavigate();
    const location = useLocation();  // Location hook-u ilə səhifə dəyişikliklərini izləyirik
    const [isAuthenticated, setIsAuthenticated] = useState(false); // İstifadəçi login olub olmadığını saxlayırıq
    const [isRoutesLoaded, setIsRoutesLoaded] = useState(false); // Yüklənmə vəziyyəti

    useEffect(() => {
        const token = localStorage.getItem("token") || sessionStorage.getItem("token"); // Token-i localStorage-dən alırıq

        if (token) {
            setIsAuthenticated(true); // Token varsa, istifadəçi login olunub
        } else {
            setIsAuthenticated(false); // Token yoxdursa, login olunmayıb
        }

        setIsRoutesLoaded(true); // Yönləndirmə hazırdır
    }, [location]); // Səhifə dəyişdikcə yoxlanacaq

    useEffect(() => {
        if (isRoutesLoaded) {
            // Əgər istifadəçi login deyilsə və account səhifəsinə daxil olursa, loginə yönləndirilir
            if (!isAuthenticated && location.pathname.includes('/account')) {
                navigate('/login');
            }

            // İstifadəçi login olubsa, onu /account səhifəsinə yönləndirin
            if (isAuthenticated && (location.pathname.includes('/login') || location.pathname.includes('/signup'))) {
                navigate('/account/details');
            }
        }
    }, [isAuthenticated, isRoutesLoaded, location, navigate]);

    return (
        <>
            <Header />

            {/* Yönləndirmə hazır olana qədər yüklənmə ekranı göstərin */}
            {isRoutesLoaded ? (
                <Routes>
                    <Route path='/' element={<Home />}  ></Route>
                    <Route path='/password' element={<Password />}  ></Route>
                    <Route path='/order' element={<Order />}  ></Route>
                    <Route path='/orderdetails' element={<OrderDetails />}  ></Route>
                    <Route path='/wishlist' element={<Wishlist />}  ></Route>
                    <Route path='/products' element={<Products />}></Route>
                    <Route path='/productsdetails/:id' element={<ProductDetails />}></Route>
                    <Route path='/productinformation' element={<ProductInformation />}></Route>
                    <Route path='/blogs/:id' element={<Blogs />}  ></Route>
                    <Route path='/blogDetails/:blogId/:blogTitle' element={<BlogDetails />}  ></Route>
                    <Route path='/events' element={<Events />}  ></Route>
                    <Route path="/eventDetails/:id" element={<EventDetails />} />
                    <Route path="/CorporateSocialResponsibility" element={<CorporateSocialRes/>} ></Route>
                    <Route path="/delivery" element={<Delivery/>} />
                    <Route path="/giftcard" element={<GiftCard/>} />
                    <Route path='/reserve' element={<Reserve />}  ></Route>

                    {isAuthenticated ? (
                        <>
                            <Route path='/account/:page' element={<Account />}  ></Route>
                        </>
                    ) : (
                        <>
                            <Route path='/login' element={<LogIn />}  ></Route>
                            <Route path='/signup' element={<SignUp />}  ></Route>
                        </>
                    )}

                    <Route path='/franchiseform' element={<FranchiseForm />}  ></Route>
                    <Route path='/contact' element={<Contact />}  ></Route>
                    <Route path='/about' element={<OurStory />}  ></Route>
                    <Route path='/vacancy' element={<Vacancy />}  ></Route>
                    <Route path='/careerform' element={<CareerForm />}  ></Route>
                    <Route path='/career' element={<CareerPage/>}></Route>
                    <Route path='/careerdetails/:vacancyId' element={<VacancyDetail />}  ></Route>
                    <Route path='/about' element={<OurStory />}  ></Route>
                    <Route path='/checkout' element={<Checkout />}  ></Route>
                    <Route path='/basket' element={<Cart />}  ></Route>
                    <Route path='/faqs' element={<Faq />}  ></Route>
                    <Route path='/gallery' element={<Gallery />}  ></Route>
                    <Route path='/forgotpass' element={<ForgotPass />}  ></Route>
                    <Route path='/branches' element={<SearchBranch />}  ></Route>
                    <Route path='/franchise' element={<Franchise />}  ></Route>
                    <Route path='/en' element={<Home />}  ></Route>
                    <Route path='/termsandconditions' element={<TermsandConditions />}  ></Route>
                    <Route path='/campaignpage' element={<CampaignPage />}  ></Route>
                    <Route  path='/campaigndetails/:campaignid/:slug' element={<CampaignDetails />}  ></Route>
                    <Route path="/resetpassword/:resetToken" element={<ResetPassword />}></Route>
                </Routes>
            ) : (
                <p>Loading...</p>
            )}
            {/* <StickyCookie/> */}
            <Footer />
        </>
    )
}

export default App;
