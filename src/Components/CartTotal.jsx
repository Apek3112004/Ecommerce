import React, { useContext } from 'react'
import { shopcontext } from '../Context/Shopcontext'
import Title from './Title';

const CartTotal = () => {

    const {currency,delieverycharges,getcartamount}=useContext(shopcontext);
  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'}/>
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
            <p>Subtotal</p>
            <p>{currency} {getcartamount()}.00</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
            <p>Shipping fee </p>
            <p>{currency} {delieverycharges}</p>
        </div>
        <hr/>
        <div className='flex justify-between'>
            <b>Total</b>
            <b>{currency} {getcartamount() === 0 ? 0:getcartamount()+delieverycharges}</b>
        </div>
        <hr/>
      </div>
    </div>
  )
}

export default CartTotal
