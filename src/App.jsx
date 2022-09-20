
import './App.css';
import NavBard from './componentes/NavBard';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom"


function App() {
  return (
    <>
    <BrowserRouter>

    <NavBard/>
    <Routes>
      <Route path="/" element={<ItemListContainer />}/>
      <Route path="/categoria/:categoriaId" element={<ItemListContainer />}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/detalle" element={<ItemDetailContainer />}/>
    </Routes>
    
    
    
    </BrowserRouter>
    
    
    </>
    
  );
}

export default App;
