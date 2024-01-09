import React, { useEffect, useState } from 'react'
import { toggle } from '../Utils/appSlice'
import { useDispatch, useSelector } from 'react-redux'
import { YOUTUBE_SUGESSTION_API } from '../Utils/constant'
import { cacheResult } from '../Utils/searchSlice'

const Header = () => {
    const [suggestion,setSuggestion] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [isOpenSuggestion,setIsOpenSuggestion] = useState(false);
    
    const searchCache = useSelector(store => store.search);

    const dispatch = useDispatch();
    const handleClick=()=>{
        dispatch(toggle());
    }

    useEffect(()=>{
        const time=setTimeout(()=>{
            if(searchCache[searchText])
            {
                setSuggestion(searchCache[searchText]);
            }
            else{
                getSuggestion();
            }
        },200);

        return ()=>{
            clearTimeout(time);
        }
        // eslint-disable-next-line
    },[searchText]);

    const getSuggestion=async()=>{
        const data=await fetch(YOUTUBE_SUGESSTION_API+searchText);
        const json = await data.json();
        //console.log(json[1]);
        setSuggestion(json[1]);

        dispatch(cacheResult({
            [searchText]:json[1],
        }))
    }

    const handleChange = (x) =>{
        setSearchText(x);
        setIsOpenSuggestion(true);
        //console.log(searchText);
    }
  return (
    <div className='flex justify-between shadow-md'>
      <div className="flex">
        <img className='h-16 cursor-pointer' onClick={()=>{ handleClick()}} src="https://icon-library.com/images/mobile-menu-icon-png/mobile-menu-icon-png-4.jpg" alt="Hamburger" />
        <img className='h-16 cursor-pointer bg-white' src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" alt="youtube logo" />
      </div>
      <div className="p-4">
        <div className="">
            <input className="border-gray-400 rounded-l-full border-2 w-96 h-8 px-6" value={searchText} 
            onChange={(e)=>handleChange(e.target.value)}
            onFocus={()=>setIsOpenSuggestion(true)}
            onBlur={()=>setIsOpenSuggestion(false)}
            type="text" />
            <button className="border-gray-400 bg-gray-200 rounded-r-full border-2 px-2 mt-2 h-8">🔍</button>
        </div>
        {isOpenSuggestion && <div className="fixed bg-white w-96 p-2 px-4 rounded-md">
            <ul>
                {suggestion.map((item,index)=>{
                    return <li key={index}>🔍{item}</li>
                })}
            </ul>
        </div>} 
      </div>
      
      <div className="third">
        <img className='h-16 cursor-pointer' src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" alt="profile" />
      </div>
    </div>
  )
}

export default Header
