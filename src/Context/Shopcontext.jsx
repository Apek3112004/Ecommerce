import { createContext } from 'react';
import { products } from '../assets/assets';
import { useState,useEffect } from 'react';
import { toast } from 'react-toastify';

export const shopcontext = createContext();

function Shopcontextprovider(props){
	const delieverycharges = '40₹';
	const currency = '₹';
	const [search, setsearch] = useState('');
	const [showsearch, setshowsearch] = useState(false);
	const [cartitems, setcartitems] = useState({});

	const addtocart=async(itemid,size)=>{

		if(!size){
			toast.error("Select product size ");
			return ;
		}

		let cartdata=structuredClone(cartitems);
		if(cartdata[itemid]){
			if(cartdata[itemid][size]){
				cartdata[itemid][size]+=1;
			}else{
				cartdata[itemid][size]=1;
			}
		}else{
			cartdata[itemid]={};
			cartdata[itemid][size]=1;
		}

		setcartitems(cartdata);
	}

	const getcartcount=()=>{
		let totalcount=0;
		for(const items in cartitems){
			for(const item in cartitems[items]){
				try{
					if (cartitems[items][item]>0) {
						totalcount+=cartitems[items][item];
					}
				}catch(error){

				}
			}
		}
		return totalcount;
	}


	

	//delete icon functionality :
	const updatequantity=async(itemid,size,quantity)=>{
		let cartdata=structuredClone(cartitems);
		cartdata[itemid][size]=quantity;
		setcartitems(cartdata);
	}

	const getcartamount=async()=>{
		let totalamount=0;
		for(const items in cartitems){
			let iteminfo=products.find((product)=>product._id===items);
			for(const item in cartitems[items]){
				try{
					if (cartitems[items][item]>0) {
						totalamount+=iteminfo.price * cartitems[items][item];
					}
				}catch(error){

				}
			}
		}
		return totalamount;
	}

	const value = {
		products,
		delieverycharges,
		currency,
		search,
		showsearch,
		setshowsearch,
		setsearch,
		cartitems,
		addtocart,
		getcartcount,
		updatequantity,
		getcartamount
	}



	return (
		<shopcontext.Provider value={value}>{props.children}</shopcontext.Provider>
	);
}

export default Shopcontextprovider;
