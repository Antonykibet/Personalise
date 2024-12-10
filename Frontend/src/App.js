import './App.css';
import Landing from './pages/landing';
import ProductPage from './pages/productPage';
import CategoryPage from './pages/categoryPage';
import Layout from './components/layout';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Checkout from './checkout/Checkout';
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';
import AdminPage from './pages/admin';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='testPage/' element={<ProductPage/>}/>
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
