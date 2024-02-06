// PaymentPage.js

import { BiCheckCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const OrderSucces = () => {


  return (
    <div>
      <h1 style={{textAlign : 'center' , fontWeight : '600'  , fontSize : '3rem' , marginTop : '20px'}}>Payment Success</h1>

      <div style={{textAlign:'center'}}>
        <BiCheckCircle size={80}/>

        <Link to='/'> <p style={{fontSize : '2rem', fontWeight:'bold' , color:'blue' , textDecoration:'underline'}}>Go To Dashboard </p></Link>
        </div>
    </div>
  );
};

export default OrderSucces;
