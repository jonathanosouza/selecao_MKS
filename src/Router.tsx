import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout/DefualtLayout";

import { Home } from "./pages/Home/Home";
import React from 'react'
import { Checkout } from "./pages/Checkout/Checkout";



export function Router() {

  return (

    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Checkout" element={<Checkout />} />
      </Route>
    </Routes>


  )


}