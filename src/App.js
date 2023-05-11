import React from "react";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import './App.css';
import Home from "./page/home"
import BaseLayout from "./components/BaseLayout";
import MesProjets, { projetLoader } from "./page/mesprojets"
import Error404 from "./page/error404";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/AllanBiseray" element={<BaseLayout /> }> 
    <Route index element={<Home />} />
    <Route path="/AllanBiseray/MesProjets" element={<MesProjets />} loader={projetLoader} errorElement={<Error404 />} />
  </Route>
))
function App() {
  return (
    <RouterProvider router={router} /> 

  );
}

export default App;
