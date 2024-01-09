import React,{useEffect} from 'react'
import LiveChat from './LiveChat'
import { useDispatch, useSelector } from 'react-redux';
import { addMessages } from '../Utils/chatSlice';
import { generate, generateMessage } from '../Utils/helper';

const LiveChatContainer = () => {
    const chatMessage = useSelector(store=>store.chat.messages);
    const dispatch = useDispatch();

    useEffect(()=>{
        //API polling
        const inter= setInterval(()=>{
            
           dispatch(addMessages({
            name:generate(),
            message:generateMessage(),
           }))
        },300);

        return ()=>{
            clearInterval(inter);
        }
    },[]);
  return (
    <div className='h-[550px] border-2 ml-2 p-2 border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse'>
        {chatMessage.map((msg,index)=><LiveChat key={index} name={msg.name} message={msg.message}/>)}
    </div>
  )
}

export default LiveChatContainer
