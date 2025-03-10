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
import { createTheme, ThemeProvider,  } from '@mui/material';
import TemplatePage from './pages/themePage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e45a00'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter >
        <Layout>
          <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='products/:productid' element={<ProductPage/>}/>
            <Route path='availableItem/:id' element={<ProductPage/>}/>
            <Route path='category/:category' element={<CategoryPage />}/>
            <Route path='template/:theme' element={<TemplatePage />}/>
            <Route path='checkout' element={<Checkout />}/>
            <Route path='sign-in' element={<SignIn />} />
            <Route path='sign-up' element={<SignUp />} />
            <Route path='admin' element={<AdminPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
