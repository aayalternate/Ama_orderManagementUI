import { use, useEffect, useState } from "react";
import EditableLabel from "./componets/EditableLabel";
import { Routes , Route } from "react-router-dom";
import HomePage from "./pages/HomePage"
import ItemListPage from "./pages/ItemsListPage";
import StockListPage from "./pages/StockListPage";

function App(){

  return(
    <>
    <Routes>
      <Route path = "/" element={<HomePage />} />
      <Route path = "/items" element={<ItemListPage />} />
      <Route path = "/stock" element={<StockListPage />} />
    </Routes>
      
    </>
  );

  
}


export default App;