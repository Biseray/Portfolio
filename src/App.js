import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./page/home"
import BaseLayout from "./components/BaseLayout";
import MesProjets, { projetLoader } from "./page/mesprojets"

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<BaseLayout /> }> 
    <Route index element={<Home />} />
    <Route path="/MesProjets" element={<MesProjets />} loader={projetLoader} />
  </Route>
))
function App() {
  return (
    <RouterProvider router={router} /> 

  );
}

export default App;