import { createContext } from 'react';
import { products } from '../assets/assets';
import { useState } from 'react';

export const shopcontext = createContext();

function Shopcontextprovider(props) {
	const delieverycharges = '40₹';
	const currency = '₹';
	const [search, setsearch] = useState('');
	const [showsearch, setshowsearch] = useState(false);
	const value = {
		products,
		delieverycharges,
		currency,
		search,
		showsearch,
		setshowsearch,
		setsearch,
	}

	return (
		<shopcontext.Provider value={value}>{props.children}</shopcontext.Provider>
	);
}

export default Shopcontextprovider;
