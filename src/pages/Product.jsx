import React, { useContext,useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { shopcontext } from '../Context/Shopcontext';
import { assets } from '../assets/assets';

const Product = () => {

  const {productid}=useParams();
  const {products,currency}=useContext(shopcontext);
  const [productdata, setproductdata] = useState(false);
  const [image, setimage] = useState('')
  const [size, setsize] = useState('')

  const fetchproductdata=async()=>{
    products.map((item)=>{
      if(item._id===productid){
        setproductdata(item)
        setimage(item.image[0]);
        console.log(item);
        return null;
      }
    })
  }
   
  useEffect(() => {
    fetchproductdata();
  }, [productid])

  return productdata? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* product data  */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* product image */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal  sm:w-[18.7%] w-full'>
            {
              productdata.image.map((item,index)=>(
                <img onClick={()=>setimage(item)} src={item} key={index} className='w-[24%]  sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="images here but they arent displayed due to some problem " />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt=""/>
          </div>
        </div>
        {/* product info */}

        <div className='flex-1'>
            <h1 className='font-medium text-2xl mt-2'>{productdata.name}</h1>
            <div className='flex items-center gap-1 mt-2'>
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_icon} alt="" className="w-3 5" />
              <img src={assets.star_dull_icon} alt="" className="w-3 5" />
              <p className='pl-2'>(122)</p>
            </div>
            <p className='mt-5 text-3xl font-medium'>{currency}{productdata.price}</p>
            <p className='mt-5 text-gray-500 md:w-4/5'>{productdata.description}</p>
            <div className='flex felx-col gap-4 my-8'>
              <p>Select size </p>
              <div className='flex gap-2'>
              {productdata.sizes.map((item,index)=>(
                <button onClick={()=>setsize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size ? 'border-orange-500':''} `} key={index}>{item}</button>
              ))}
              </div>
            </div>

            <button className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 '>Add to cart </button>
            <hr className='mt-8 sm:w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
              <p>100%  Original product </p>
              <p>Cash on delievery is available in this product</p>
              <p>Easy return and exchange policy within 7 days </p>
            </div>
        </div>
      </div>
{/* description and review section  */}
<div className='mt-20'>
  <div className='flex'>
    <b className='border px-5 py-3 text-sm'>Description </b>
    <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
  </div>
  <div className='flex flex-col gap-4 px-6 text-sm text-gray-500'>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet debitis enim vitae. Natus pariatur deserunt blanditiis fuga nostrum voluptatem eum labore, atque tenetur sit. Molestias quas eaque tempora non perspiciatis!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et consequuntur enim corrupti qui magnam voluptate porro aspernatur architecto repudiandae eaque placeat, autem voluptas consequatur, ratione assumenda similique cumque voluptatibus ad.</p>
  </div>
</div>
{/* display related products  */}
    </div>
  ):<div className='opacity-0'></div>

}
export default Product