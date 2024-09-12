import React, { useContext ,useEffect,useState} from 'react'
import { shopcontext } from '../Context/Shopcontext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
  const {search,setsearch,showsearch,setshowsearch} =useContext(shopcontext);
  const location=useLocation();
  const [visible, setvisible] = useState(false)
  useEffect(() => {
    if(location.pathname.includes('collection')){
        setvisible(true);
    }else{
        setshowsearch(false);
    }
  }, [location])
  return showsearch && visible ?(
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex justify-center items-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' placeholder='Search'/>
            <img className='w-4' src={assets.search_icon} alt="" />
        </div>
        <img onClick={()=>setshowsearch(false)} className='inline w-3 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
      
  ):null
}

export default Searchbar
