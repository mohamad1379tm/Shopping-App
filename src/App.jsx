import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favourites from './pages/FavouritesProducts/Favourites';
import Shopping from './pages/ShoppingProducts/Shopping';
import Context from './pages/Context/Context';
import Online from './pages/online-payment/Online';
import PayAtHome from './pages/Pay-at-home/Pay-at-home';
import AboutProduct from './pages/AboutProduct/AboutProduct';


export default function App() {

  return (
    <Context>
      <BrowserRouter>
        <Routes>
            <Route path='/'>
              <Route index element={<Home />}/>
              <Route path='Favourites' element={<Favourites/>}/>
              <Route path='Shopping' element={<Shopping/>}/>
              <Route path='Online' element={<Online/>}/>
              <Route path='PayAtHome' element={<PayAtHome/>}/>
              <Route path='AboutProduct' element={<AboutProduct/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
    </Context>
  );
}


