import './App.css';
import Landing from './pages/landing';
import ProductPage from './pages/productPage';
import Layout from './components/layout';
import { Route,Routes,BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='testPage' element={<ProductPage/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
