import React, { useContext, useState } from 'react'
import { shopcontext } from '../Context/Shopcontext'
import { useEffect } from 'react';
import Productitem from './Productitem';
import Title from './Title';

// const Relatedproducts = (category,subCategory) => {

//     const {products}= useContext(shopcontext);
//     const [related, setrelated] = useState([]);

//     useEffect(() => {
//          if(products.length>0){
//             let productscopy=products.slice();
//             productscopy=productscopy.filter((item)=>category === item.category);
//             productscopy=productscopy.filter((item)=> subCategory===item.subCategory);
//             console.log(productscopy.slice(0,5));
//             setrelated(productscopy.slice(0,5));
//          }
//     }, [products])
//   return (
//     <div className='my-24'>
//       <div className='text-center text-3xl py-2'>
//         <Title text1={'RELATED'} text2={'PRODUCTS'} />
//       </div>
//       <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
//         {related.map((item,index)=>(
//             <Productitem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
//         ))}
//       </div>
//     </div>
//   )
// }
const Relatedproducts = ({ category, subCategory }) => {
  const { products } = useContext(shopcontext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
      if (products.length > 0) {
          let productscopy = products.slice();
          productscopy = productscopy.filter((item) => category === item.category);
          productscopy = productscopy.filter((item) => subCategory === item.subCategory);
          console.log(productscopy.slice(0, 5)); // This should now work correctly
          setRelated(productscopy.slice(0, 5));
      }
  }, [products, category, subCategory]);

  return (
      <div className='my-24'>
          <div className='text-center text-3xl py-2'>
              <Title text1={'RELATED'} text2={'PRODUCTS'} />
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 '>
              {related.map((item, index) => (
                  <Productitem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
              ))}
          </div>
      </div>
  );
};


export default Relatedproducts;