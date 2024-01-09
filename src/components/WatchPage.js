import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import CommentContainer from './CommentContainer';
import LiveChatContainer from './LiveChatContainer';
import { useDispatch } from 'react-redux';
import { addMessages } from '../Utils/chatSlice';

const WatchPage = () => {
    const [likeCount,setLikeCount] = useState(0);
    const [textMsg,setTextMsg]=useState("");
    const [searchParams]=useSearchParams();
    const dispatch=useDispatch();

    const appendMessage=(msg)=>{
        dispatch(addMessages({
            name:"Aditya",
            message:msg,
        }));
    }

  return (
    <div className='flex-col w-full'>
        <div className="flex w-full">
            <div className="w-full">
                <iframe width="1000" height="550" 
                src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
                title="YouTube video player" frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>

                </iframe>
                <div className="flex mt-1 justify-around">
                    <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" onClick={()=>setLikeCount(likeCount+1)}>Like-{likeCount}</button>
                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Subscribe</button>
                </div>
            </div>
            <div className="w-full">
                <LiveChatContainer/>
                <div className="border-2 p-1 border-black rounded-lg">
                    <input type="text" placeholder='type' value={textMsg} onChange={(e)=>{setTextMsg(e.target.value)}} className='p-1 w-3/4' />
                    <button onClick={(e)=>appendMessage(textMsg)} className='border-2 w-1/4 p-1 bg-green-200 mr-0'>send</button>
                </div>
            </div>
        </div>
        <div className="second">
            <CommentContainer/>
        </div>
      
    </div>
  )
}

export default WatchPage
