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
import { GlobalProvider } from './Context/GlobalContext';
import PublicCatalog from './components/Dashboard/Products/publicCatalog';
import PublicProductDetail from './components/Dashboard/Products/publicProductDetails';

function App() {

  return (
    <div>
      <GlobalProvider>
        <Routes>
          <Route path='/' element={<Dashboard />}>
            <Route index element={<MainContent />} />
            <Route path='product-pages' element={<ProductsPage />} />
            <Route path='product-pages/create' element={<ProductCreate />} />


            <Route path='invoice/createInvoice' element={<CreateInvoice />} />
            <Route path='invoice' element={<Invoice />} />
          </Route>
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='buy/:username' element={<PublicCatalog />} />
          <Route path='buy/:username/:slug' element={<PublicProductDetail />} />
        </Routes>
        <ToastContainer />
      </GlobalProvider>
    </div>
  );
}

export default App;
