import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const SideBar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if(!isMenuOpen)
    {
        return null;
    }
  return (
    <div className='w-40 list-none shadow-lg px-5 py-4'>
      <ul>
        <li>
            <Link to="/"> 
            Home
            </Link>
        </li>
        <li>Shorts</li>
        <li>your videos</li>
        <li>channel</li>
      </ul>
        <h1 className='font-bold'>Subscription</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
      <h1 className='font-bold'>Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul>
    </div>
  )
}

export default SideBar
