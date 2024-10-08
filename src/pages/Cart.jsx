import React, { useContext, useState } from 'react'
import { shopcontext } from '../Context/Shopcontext'
import { useEffect } from 'react';
import Title from '../Components/Title';
import { assets } from '../assets/assets';

const Cart = () => {
  const {products,currency,cartitems,updatequantity}=useContext(shopcontext);

  const [cartdata,setcartdata]=useState([]);

  useEffect (()=>{
    const tempdata=[];
    for(const items in cartitems){
      for(const item in cartitems[items]){
        if(cartitems[items][item]>0){
          tempdata.push({
            _id:items,
            size:item,
            quantity:cartitems[items][item]
          })
        }
      }
    }
    setcartdata(tempdata);
  },[cartitems])
  return (
    <div className='border-t pt-14'>
      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={"CART"}/>
      </div>

      <div>
        {cartdata.map((item,index)=>{
          const productdata=products.find((product)=>product._id===item._id);

          return (
            <div key={index} className='py-4 border-t border-b text-gray-700 grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
              <div className='flex items-start gap-9'>
                <img className='w-16 sm:w-20' src={productdata.image[0]} alt=""/>
                <div>
                  <p className='text-xs sm:text-lg font-medium'>{productdata.name}</p>
                  <div className='flex items-center gap-5 mt-2'>
                    <p>{currency}{productdata.price}</p>
                    <p className='px-2 sm:px-3 sm:py-1 border bg-slate-50'>{item.size}</p>
                  </div>
                </div>
                <input onChange={(e)=>e.target.value==='' || e.target.value==='0' ? null :updatequantity(item._id,item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number" min={1} defaultValue={item.quantity}/>
                <img onClick={()=>updatequantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt=""/>
              </div>

            </div>
          )
        })}
      </div>
      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px] '>

        </div>
      </div>
    </div>
  )
}

export default Cart
