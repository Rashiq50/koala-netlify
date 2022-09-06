import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import { Routes, Route } from "react-router-dom";
import Invoice from './components/Dashboard/Invoice';
import MainContent from './components/Dashboard/MainContent';
import CreateInvoice from './components/Dashboard/CreateInvoice';
import Login from './components/Login/Login'
import SignUp from './components/Login/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductsPage from './components/Dashboard/Products/products';
import ProductCreate from './components/Dashboard/Products/create';
import { GlobalContext, GlobalProvider } from './Context/GlobalContext';
import PublicCatalog from './components/Dashboard/Products/publicCatalog';
import PublicProductDetail from './components/Dashboard/Products/publicProductDetails';
import ProtectedRoute from './components/protectedRoutes';
import { useContext, useState } from 'react';
import ProductDetails from './components/Dashboard/Products/productDetails';
import ProductEdit from './components/Dashboard/Products/productEdit';
import DashboardHome from './components/Dashboard/DashboardHome';
import PaymentLinks from './components/Dashboard/PaymentLinks/paymentLinks';
import PublicView from './components/Dashboard/PaymentLinks/publicView';
import LinkDetails from './components/Dashboard/PaymentLinks/linkDetails';
import Transfers from './components/Dashboard/Transfer/transfers';

function App() {

  const [user, setUser] = useState(null);
  const [state, setState] = useContext(GlobalContext);

  return (
    <div>
      <Routes>

        <Route path='/' element={
          <ProtectedRoute user={state.loggedIn}>
            <Dashboard />
          </ProtectedRoute>
        }>
          <Route index element={<MainContent />} />
          <Route path='dashboard' element={<DashboardHome />} />
          <Route path='product-pages' element={<ProductsPage />} />
          <Route path='product-pages/create' element={<ProductCreate />} />
          <Route path='product-pages/:id' element={<ProductDetails />} />
          <Route path='product-pages/:id/edit' element={<ProductEdit />} />

          <Route path='payment-links' element={<PaymentLinks />} />
          <Route path='payment-links/:slug' element={<LinkDetails />} />

          <Route path='transfers' element={<Transfers />} />
          
          <Route path='invoice/createInvoice' element={<CreateInvoice />} />
          <Route path='invoice' element={<Invoice />} />
        </Route>

        <Route path='login' element={<Login />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='buy/:username' element={<PublicCatalog />} />
        <Route path='buy/:username/:slug' element={<PublicProductDetail />} />
        <Route path='pay/:username/:slug' element={<PublicView />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
