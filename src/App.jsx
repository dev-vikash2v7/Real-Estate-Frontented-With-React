import { Suspense, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";

import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Properties from "./pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property/Property";
import UserDetailContext from "./context/UserDetailContext";
import Bookings from "./pages/Bookings/Bookings";
import Favourites from "./pages/Favourites/Favourites";
import Checkout from "./pages/Checkout/Checkout";
import OrderSucces from "./pages/Checkout/OrderSuccess";
import Contact2 from "./components/Contact/Contact2";

function App() {

  const queryClient = new QueryClient();

  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null,
  });

  return (
    <UserDetailContext.Provider value={{ userDetails, setUserDetails }}>
      <QueryClientProvider client={queryClient}>

        <BrowserRouter>
          <Suspense fallback={<div>Loading...</div>}>

            <Routes>

                <Route element={<Layout />}>

                  <Route path="/" element={<Website />} />

                  <Route path="/contact" element={<Contact2/>}/>

                  <Route path="/properties">
                  
                  <Route index element={<Properties />} />
                  <Route path=":propertyId" element={<Property />} />
                  </Route>

                  <Route path="/bookings" element={<Bookings />} />
                  <Route path="/favourites" element={<Favourites />} />

                   <Route path="/order-success" element={<OrderSucces />} />
                 </Route>

              <Route path="/checkout" element={<Checkout />} />

            </Routes>

          </Suspense>
        </BrowserRouter>

        <ToastContainer />
        
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;
