import React,{useContext} from 'react'
import { shopcontext } from '../Context/Shopcontext'
import Title from './Title';
import Productitem from './Productitem';
import { useEffect, useState } from 'react';

const Latestcollection = () => {
    const {products} =useContext(shopcontext);
    const [latestproducts, setlatestproducts] = useState([]);

    useEffect(() => {
      setlatestproducts(products.slice(0,10));
    }, [])
    // console.log(products);
  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus inventore pariatur repellat officia repudiandae magnam vero ullam, reprehenderit quod velit ad magni debitis distinctio! Doloremque odio dicta ipsa tempora aliquam!
            </p>
        </div>
    {/* rendering products  */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-8'>
        {
            latestproducts.map((item,index)=>(
                <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
    </div>
    </div>
  )
}

export default Latestcollection;