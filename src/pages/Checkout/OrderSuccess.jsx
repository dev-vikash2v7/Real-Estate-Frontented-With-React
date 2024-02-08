
import { Button } from '@mantine/core';
import { BiCheckCircle } from 'react-icons/bi';
import {   useNavigate } from 'react-router-dom';
import React from 'react';

const OrderSucces = () => {

const nav = useNavigate();

  return (
    <div className="wrapper" style={{height:'60vh' }}>
      <h1 style={{textAlign : 'center' , fontWeight : '600'  , fontSize : '3rem' , marginTop : '40px'}}>Payment Success</h1>

      <div style={{textAlign:'center' , margin : 'auto' , display:'flex' , flexDirection : 'column' , justifyContent:'center' , alignItems:'center'}}>
        <BiCheckCircle size={80} color='green'/>

        <Button style={{fontSize : '1.4rem', fontWeight:'bold'  , color:'black' , marginTop : '10px'  }}  onClick={()=> nav('/')}>
        Go To Dashboard </Button>
        </div>
    </div>
  );
};

export default OrderSucces;
