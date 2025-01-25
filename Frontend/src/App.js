import './App.css';
import Landing from './pages/LandingPage/landing';
import ProductPage from './pages/productPage';
import CategoryPage from './pages/categoryPage';
import Layout from './components/layout';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Checkout from './pages/checkout/Checkout';
import SignIn from './pages/sign-in/SignIn';
import SignUp from './pages/sign-up/SignUp';
import AdminPage from './pages/Admin/admin';
function App() {
  return (
    <BrowserRouter >
      <Layout>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='productPage/:productid' element={<ProductPage/>}/>
          <Route path='category/:category' element={<CategoryPage />}/>
          <Route path='checkout' element={<Checkout />}/>
          <Route path='sign-in' element={<SignIn />} />
          <Route path='sign-up' element={<SignUp />} />
          <Route path='admin' element={<AdminPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
