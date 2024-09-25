import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Product from './Pages/Product';
import { AuthProvider } from './Context/AuthContext';
import Footer from './Components/footer/footer';
import MenPage from './Pages/MenPage';
import WomenPage from './Pages/WomenPage';
import KidsPage from './Pages/KidsPage';
import NewArrivals from './Pages/NewArrivals';
function App() {
  return (
    <div className="App">
      <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/mens' element={<MenPage/>}/>
          <Route path='/womens' element={<WomenPage/>}/>
          <Route path='/kids' element={<KidsPage/>}/>
          <Route path='/newarrivals' element={<NewArrivals/>}/>
          <Route path='/product' element={<Product/>}>
             <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/loginsignup' element={<LoginSignup/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
