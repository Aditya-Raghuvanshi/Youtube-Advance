import React from 'react'

const CommentList = [
    {
        name:"Aditya",
        text:"Lorem orem ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati eaque dolo",
        replies:[{
            name:"Aditya",
            text:"Lorem orem ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati eaque dolo",
            replies:[]
        },
        {
            name:"Aditya",
            text:"Lorem orem ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati eaque dolo",
            replies:[]
        },
        {
            name:"Aditya",
            text:"Lorem orem ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati eaque dolo",
            replies:[
                {
                    name:"Aditya",
                    text:"Lorem orem ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati eaque dolo",
                    replies:[
                        {
                            name:"Aditya",
                            text:"Lorem orem ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati eaque dolo",
                            replies:[]
                        },
                    ]
                },
                {
                    name:"Aditya",
                    text:"Lorem orem ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati eaque dolo",
                    replies:[]
                },
            ]
        },]
    },
    {
        name:"Aditya",
        text:"Lorem orem ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati eaque dolo",
        replies:[]
    },
    {
        name:"Aditya",
        text:"Lorem orem ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati eaque dolo",
        replies:[]
    },
    {
        name:"Aditya",
        text:"Lorem orem ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati eaque dolo",
        replies:[]
    },
    {
        name:"Aditya",
        text:"Lorem orem ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati eaque dolo",
        replies:[]
    },
    {
        name:"Aditya",
        text:"Lorem orem ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati eaque dolo",
        replies:[]
    },
    {
        name:"Aditya",
        text:"Lorem orem ipsum dolor sit amet consectetur adipisicing elit. Facilis obcaecati eaque dolo",
        replies:[]
    },
]

const Comment = ({data}) =>{
    return <div className="flex-col">
        <div className="flex ">
            <div className="1">
                <img className='h-16 cursor-pointer' src="https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg" alt="logo" />
            </div>
            <div className="2 flex-col">
                <h1>{data.name}</h1>
                <h2>{data.text} </h2>
            </div> 
        </div>
    </div>
};

const CommentListIt = ({comments}) =>{
    return comments.map((comment,index)=>(
            <div key={index} className="flex-col">
                <div className="">
                <Comment data={comment}/>
                </div>
                <div className="pl-32 border-l-black border-2">
                <CommentListIt comments={comment.replies}/>
                </div>
            </div>
        ));
}

const CommentContainer = () => {
  return (
    <div>
        <h1 className='font-bold text-3xl my-6'>Comments:</h1>
      <CommentListIt comments={CommentList}/>
    </div>
  )
}

export default CommentContainer
