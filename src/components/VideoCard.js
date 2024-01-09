import React from 'react'
import { Link } from 'react-router-dom';

const VideoCard = (item) => {
    //console.log(item.item.id);
    // const {snippet,statistics} = item;
    // const {thumbnails}=snippet;
  return (
    <div className='content-center p-2 w-80 shadow-md'>
        <Link to={"/watch?v="+item?.item?.id}>
            <img src={item?.item?.snippet?.thumbnails?.medium?.url} alt="logo" />
            <h2 className='font-bold'>{item?.item?.snippet?.title}</h2>
            <p>{item?.item?.statistics?.viewCount} views</p> 
        </Link>
        
    </div>
  )
}

export default VideoCard;
