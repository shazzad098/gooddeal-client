import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import './App.css';

// Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
// Alert.js ekhon Navbar.js er moddhe ache
import Home from './components/pages/Home';
import Products from './components/products/Products';
import ProductList from './components/products/ProductList';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Cart from './components/cart/Cart';
import Checkout from './components/order/Checkout';
import AdminDashboard from './components/admin/AdminDashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import AdminRoute from './components/routing/AdminRoute';
import { loadUser } from './actions/authActions';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import FAQ from './components/pages/FAQ'
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import ShippingInfo from './components/pages/ShippingInfo';
import ReturnsPolicy from './components/pages/ReturnsPolicy';
import TermsOfService from './components/pages/TermsOfService';
import SupportPage from './components/pages/SupportPage';
import ScrollToTop from './components/routing/ScrollToTop';
import WebDevService from './components/pages/WebDevService';

// --- NEW IMPORTS from Footer Links ---
import FabricManufacturing from './components/pages/FabricManufacturing'; 
import CustomPrinting from './components/pages/CustomPrinting';
import TextileDesign from './components/pages/TextileDesign'; 
import QualityControl from './components/pages/QualityControl';
import BulkOrders from './components/pages/BulkOrders';
import QualityGuarantee from './components/pages/QualityGuarantee';
import TechnicalSupport from './components/pages/TechnicalSupport';
import SampleRequests from './components/pages/SampleRequests';
import QualityStandards from './components/pages/QualityStandards';
import Sustainability from './components/pages/Sustainability'; // <--- NEW IMPORT
// -------------------------------------


// AppLayout Component
const AppLayout = () => {
    const location = useLocation();
    const isAdminRoute = location.pathname.startsWith('/admin');

    return (
        <div className="App">
            {!isAdminRoute && <Navbar />}
            
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<ProductList />} />
                    <Route path="/products/:id" element={<Products />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/faq" element={<FAQ />} />

                    <Route path="/shipping" element={<ShippingInfo />} />
                    <Route path="/returns" element={<ReturnsPolicy />} />
                    <Route path="/terms" element={<TermsOfService />} />
                    <Route path="/support" element={<SupportPage />} />
                    <Route path="/Privacy" element={<PrivacyPolicy />} />

                    <Route path="/services/web-development" element={<WebDevService />} />

                    {/* --- NEW ROUTES from Footer Links --- */}
                    <Route path="/fabric-manufacturing" element={<FabricManufacturing />} />
                    <Route path="/custom-printing" element={<CustomPrinting />} />
                    <Route path="/textile-design" element={<TextileDesign />} />
                    <Route path="/quality-control" element={<QualityControl />} />
                    <Route path="/bulk-orders" element={<BulkOrders />} />
                    <Route path="/quality-guarantee" element={<QualityGuarantee />} />
                    <Route path="/technical-support" element={<TechnicalSupport />} />
                    <Route path="/sample-requests" element={<SampleRequests />} />
                    <Route path="/quality" element={<QualityStandards />} />
                    <Route path="/sustainability" element={<Sustainability />} /> {/* <--- NEW ROUTE */}
                    {/* ------------------------------------ */}

                    {/* Admin Routes */}
                    <Route
                        path="/admin/*"
                        element={
                            <AdminRoute>
                                <AdminDashboard />
                            </AdminRoute>
                        }
                    />

                    {/* Regular protected routes */}
                    <Route
                        path="/checkout"
                        element={
                            <PrivateRoute>
                                <Checkout />
                            </PrivateRoute>
                        }
                    />
                </Routes>
            </main>

            {!isAdminRoute && <Footer />}
        </div>
    );
};

// App Content Component
const AppContent = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadUser());
    }, [dispatch]);

    return (
        <Router>
            <ScrollToTop />
            <AppLayout />
        </Router>
    );
};

// Main App Component
function App() {
    return (
        <Provider store={store}>
            <AppContent />
        </Provider>
    );
}

export default App;
