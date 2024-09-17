import React, { useContext, useState,useEffect } from 'react';
import { shopcontext } from '../Context/Shopcontext';
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import Productitem from "../Components/Productitem";

const Collection = () => {
	const { products,search,showsearch } = useContext(shopcontext);
	const [showfilter, setshowfilter] = useState(false);
	const [filterproducts, setfilterproducts] = useState([]);
	const [category, setcategory] = useState([]);
	const [subCategory, setsubCategory] = useState([]);
	const [sortType, setsortType] = useState('relevant');
	const togglecategory=(e)=>{
		if(category.includes(e.target.value)){
			setcategory(prev=>prev.filter(item=>item!=e.target.value))
		}else{
			setcategory(prev=>[...prev,e.target.value]);
		}
	}

	const togglesubCategory=(e)=>{
		if(subCategory.includes(e.target.value)){
			setsubCategory(prev=>prev.filter((item)=>item!=e.target.value))
		}else{
			setsubCategory(prev=>[...prev,e.target.value])
		}
	}

	const applyFilter=()=>{
		let productsCopy=products.slice();

		if(showsearch && search){
			productsCopy=productsCopy.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
		}
		if(category.length>0){
			productsCopy=productsCopy.filter((item)=>category.includes(item.category))
		}
		if(subCategory.length>0){
			productsCopy=productsCopy.filter((item)=>subCategory.includes(item.subCategory))
		}
		setfilterproducts(productsCopy)
	}

	useEffect(() => {
	   applyFilter();
	}, [category,subCategory,search,showsearch])


	const sortproduct=()=>{
		let fpcopy=filterproducts.slice();
		switch(sortType){
			case 'low-high':
				setfilterproducts(fpcopy.sort((a,b)=>(a.price -b.price)));
				break;
			case 'high-low':
				setfilterproducts(fpcopy.sort((a,b)=>(b.price-a.price)));
				break;
			default:
				applyFilter();
				break;
		}
	}

	useEffect(() => {
	  sortproduct();
	}, [sortType])

	return (
		<div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
			{/* filter options  */}
			<div className="min-w-60">
				<p
					onClick={() => !showfilter}
					className="my-2 text-xl flex items-center cursor-pointer gap-2 ">
					Filters{' '}
					<img
						className={`h-3 sm:hidden ${showfilter ? 'rotate-90' : ''}`}
						src={assets.dropdown_icon}
						alt=""
					/>
				</p>
				{/* category filter */}
				<div
					className={`border border-gray-300 pl-5 py-3 mt-6 ${
						showfilter ? '' : 'hidden'
					} sm:block`}>
					<p className="mb-3 text-sm font-medium ">CATEGORIES</p>
					<div className="flex flex-col gap-2 text-sm font-light text-gray-700">
						<p className="flex gap-2 ">
							<input className="w-3" type="checkbox" onChange={togglecategory} value={'Men'} />
							Men
						</p>
						<p className="flex gap-2 ">
							<input className="w-3" type="checkbox" onChange={togglecategory} value={'Women'} />
							Women
						</p>
						<p className="flex gap-2 ">
							<input className="w-3" type="checkbox" onChange={togglecategory} value={'Kids'} />
							Kids
						</p>
					</div>
				</div>
				{/* sub category filter*/}
				<div
					className={`border border-gray-300 pl-5 py-3 my-5 ${
						showfilter ? '' : 'hidden'
					} sm:block`}>
					<p className="mb-3 text-sm font-medium ">Type</p>
					<div className="flex flex-col gap-2 text-sm font-light text-gray-700">
						<p className="flex gap-2 ">
							<input className="w-3" onChange={togglesubCategory} type="checkbox" value={'Topwear'} />
							Topwear
						</p>
						<p className="flex gap-2 ">
							<input className="w-3" onChange={togglesubCategory} type="checkbox" value={'Bottomwear'} />
							Bottomwear
						</p>
						<p className="flex gap-2 ">
							<input className="w-3" onChange={togglesubCategory} type="checkbox" value={'Winterwear'} />
							Winterwear
						</p>
					</div>
				</div>
			</div>

			{/* right side */}
			<div className="flex-1">
				<div className="flex justify-between text-base sm:text-2xl mb-4">
					<Title text1={'All '} text2={'Collections'} />
					{/* product sort */}
					<select onChange={(e)=>setsortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
						<option value="relevant">Sort by relevant</option>
						<option value="low-high">Sort by low to high</option>
						<option value="high-low">Sort by high to low</option>
					</select>
				</div>

				{/* Map products */}
				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
					{filterproducts.map((item,index)=>(
						<Productitem key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>
					))
					}
				</div>
			</div>
		</div>
	);
};

export default Collection;
