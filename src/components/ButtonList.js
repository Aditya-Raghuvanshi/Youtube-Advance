import React from 'react'
import Button from './Button';

//const List = ["All","Live","Criket","Movies","Episods","Gadgets","News","All","All","All","All","All","All"];

const ButtonList = () => {
  return (
    <div className='flex p-2 ml-10 pl-10'>
       <Button name="All"/>
       <Button name="Live"/>
       <Button name="Criket"/>
       <Button name="Movies"/>
       <Button name="Episods"/>
       <Button name="Gadgets"/>
       <Button name="News"/>
       <Button name="Trailers"/>
       <Button name="Hindi movies"/>
       <Button name="Hollywood"/>
       <Button name="Podcast"/>
    </div>
  )
}

export default ButtonList
