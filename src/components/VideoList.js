import React,{useEffect, useState} from 'react'
import { YOU_TUBE_API } from '../Utils/constant'
import VideoCard from './VideoCard'

const VideoList = () => {
    const [videos,setVideos] = useState(null);
    useEffect(()=>{
        //api call
        getVideoData();
    },[]);
    const getVideoData= async() =>{
        const data=await fetch(YOU_TUBE_API);
        const json = await data.json();
        setVideos(json?.items);
    };
    if(!videos) return null; 
  return (
    <div className='flex flex-wrap ml-10 pl-10'>
        {videos.map(video=>{
        return <VideoCard key={video?.id} item={video}/>
        })}
    </div>
  )
}

export default VideoList
