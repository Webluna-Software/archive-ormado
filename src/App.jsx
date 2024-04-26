import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Password from './pages/Password';
import Order from './pages/Order';
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
import Account from './pages/Account';
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
import { validateUser } from './utils/user';

const App = () => {

    const navigate = useNavigate();
    const [validRoutes , setValidRoutes] = useState();

    useEffect(()=>{
        setValidRoutes( validateUser() );

        if(validateUser() !== null && (window.location.pathname.includes('signup') || window.location.pathname.includes('login')) ) {
            navigate('/account');
        }

    },[useLocation()])

    

    return (
        <>
            <Header />

            <Routes>
                <Route path='/' element={<Home />}  ></Route>
                <Route path='/password' element={<Password />}  ></Route>
                <Route path='/order' element={<Order />}  ></Route>
                <Route path='/orderdetails' element={<OrderDetails />}  ></Route>
                <Route path='/wishlist' element={<Wishlist />}  ></Route>
                <Route path='/products' element={<Products />}></Route>
                <Route path='/productsdetails/:id' element={<ProductDetails />}></Route>
                <Route path='/productinformation' element={<ProductInformation />}></Route>
                <Route path='/blogs' element={<Blogs />}  ></Route>
                <Route path='/blogDetails/:id' element={<BlogDetails />}  ></Route>
                <Route path='/reserve' element={<Reserve />}  ></Route>

                {
                    validRoutes !== null ? 
                    
                    <>
                        <Route path='/login' element={<Account />}  ></Route>
                        <Route path='/signup' element={<Account />}  ></Route>
                        <Route path='/account' element={<Account />}  ></Route>
                    </>
                    :
                    // Login Olmayibsa
                    <>
                        <Route path='/login' element={<LogIn />}  ></Route>
                        <Route path='/account' element={<LogIn />}  ></Route>
                        <Route path='/signup' element={<SignUp />}  ></Route>
                    </>
                }



                <Route path='/franchiseform' element={<FranchiseForm />}  ></Route>
                <Route path='/contact' element={<Contact />}  ></Route>
                <Route path='/about' element={<OurStory />}  ></Route>
                <Route path='/vacancy' element={<Vacancy />}  ></Route>
                <Route path='/careerform' element={<CareerForm />}  ></Route>
                <Route path='/career' element={<CareerPage/>}></Route>
                <Route path='/careerdetails' element={<VacancyDetail />}  ></Route>
                <Route path='/about' element={<OurStory />}  ></Route>
                <Route path='/checkout' element={<Checkout />}  ></Route>
                <Route path='/basket' element={<Cart />}  ></Route>
                <Route path='/faqs' element={<Faq />}  ></Route>
                <Route path='/gallery' element={<Gallery />}  ></Route>
                <Route path='/forgotpass' element={<ForgotPass />}  ></Route>
                <Route path='/branches' element={<SearchBranch />}  ></Route>
                <Route path='/franchise' element={<Franchise />}  ></Route>
                <Route path='/en' element={<Home />}  ></Route>
            </Routes>
            <Footer />
        </>
    )
}

export default App