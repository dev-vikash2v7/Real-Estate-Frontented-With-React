import {
  Container,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import  {BASE_URL}  from "../../config";
import CheckFormElement from "./CheckFormElement";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51OcOelSJbNHwzu2iaWHv6Pyeqbt8rMJzFPjWtuSatm8FLnJQOs2GR1lql3A7OYyu1s7oMX9wYN76xp9ZE4gFw8L300fyK85med"
);


const Checkout  = () => {

  const location = useLocation();
  const { amount } = location.state;




  const [clientSecret , setClientSecret] = useState('')

  const currency = "usd"

  
  useEffect(()=>{
    
    const data = {
      amount : amount,
      currency : currency
    }
    
    axios.post(`${BASE_URL}/create-payment-intent`,data)
    .then((res)=>{
     setClientSecret(res.data.clientSecret)
   })
    .catch(err=>console.log(err))


  },[])


 const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
  };


  

  return (
    <Container>


          <div
            style={{
              fontSize: "2.2rem",
              fontWeight: "bold",
              marginTop: 32,
              marginBottom: "1.4rem",
            }}
          >
            Pay With Card
          </div>

          <p style={{
              fontSize: "1.2rem",
              fontWeight: "400",
              marginTop: 32,
              marginBottom: "2rem",
            }}>Total Amount : <b>$ {amount}</b></p>

       

          {/* <CheckoutForm /> */}
   {    clientSecret && <Elements options={options} stripe={stripePromise}>
            <CheckFormElement />
          </Elements>}
          {/* </Elements> */}
  

       
      
    </Container>
  );
};

export default Checkout;
