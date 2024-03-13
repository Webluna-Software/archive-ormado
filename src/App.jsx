import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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

const App = () => {
    return (
        <BrowserRouter>
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
                <Route path='/login' element={<LogIn />}  ></Route>
                <Route path='/franchiseform' element={<FranchiseForm />}  ></Route>
                <Route path='/contact' element={<Contact />}  ></Route>
                <Route path='/about' element={<OurStory />}  ></Route>
                <Route path='/career' element={<Vacancy />}  ></Route>
                <Route path='/careerdetails' element={<VacancyDetail />}  ></Route>
                <Route path='/about' element={<OurStory />}  ></Route>
                <Route path='/account' element={<Account />}  ></Route>
                <Route path='/checkout' element={<Checkout />}  ></Route>
                <Route path='/basket' element={<Cart />}  ></Route>
                <Route path='/careerform' element={<CareerForm />}  ></Route>
                <Route path='/careerpage' element={<CareerPage/>}></Route>
                <Route path='/forgotpass' element={<ForgotPass />}  ></Route>
                <Route path='/branches' element={<SearchBranch />}  ></Route>
                <Route path='/signup' element={<SignUp />}  ></Route>
                <Route path='/franchise' element={<Franchise />}  ></Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App