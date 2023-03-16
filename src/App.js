import React  from 'react'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Deal from "./pages/Deal";
import GameList from './pages/GameList';


function App() {
  return (
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:storeId/:storeName/Deal" element={<Deal/>} />
      <Route path="/:storeId/:storeName/:gameId/GameList" element={<GameList/>} />
   </Routes>  
  
   </BrowserRouter>
  )
}

export default App;
