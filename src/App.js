import Navbar from './Components/Navbar/Navbar';
import { BrowserRoutter, Routes, Route} from "react-router-dom";
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';

function App() {
  return (
    <div className="">
      <BrowserRoutter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Shop/>}></Route>
            <Route path="/mens" element={<ShopCategory category="men"/>}></Route>
            <Route path="/womens" element={<ShopCategory category="women"/>}></Route>
            <Route path="/kids" element={<ShopCategory category="kids"/>}></Route>

            <Route path='product' element={<Product/>}>

            </Route>
          </Routes>
      </BrowserRoutter>
      <Navbar/>
    </div>
  );
}

export default App;
