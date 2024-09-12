import React, { useContext, useState, useEffect } from 'react';
import { shopcontext } from '../Context/Shopcontext';
import Title from './Title';
import Productitem from './Productitem';

const BestSeller = () => {
	const { products } = useContext(shopcontext);
	const [BestSeller, setBestSeller] = useState([]);
	useEffect(() => {
		const bestproduct = products.filter((item) =>(item.bestseller));
        setBestSeller(bestproduct.slice(0,5))
	}, []);
	return (<div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLER'}/>
            <p className='w-3/4 mm--auto text-xs sm:text-sm md:text-base text-gray-600'>Provident, quae suscipit consequuntur alias tenetur, corporis tempora quibusdam veniam laboriosam laborum qui quo minima voluptas odio repellat atque?
            </p>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {
                BestSeller.map((item,index)=>(
                    <Productitem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>);
};

export default BestSeller;
