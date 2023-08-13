import React, { Fragment, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {addPost, deletePost, updatePost} from '../features/posts/postSlice'
function Posts() {
   const [title,setTitle] = useState('');
   const [description,setDescription] = useState('');
   const [updateTitle,setUpdateTitle] = useState('');
   const [updateDescription,setUpdateDescription] = useState('');
   const dispatch = useDispatch();
   const posts = useSelector((state)=>state.posts.items);
   const [edit,setEdit] = useState(false);
   const [id, setId] = useState(null);
  return (
    <Fragment>
      <div className='form'>
        <input type='text' onChange={(e)=>{setTitle(e.target.value)}} placeholder='Enter Title'/>
        <input type='text' onChange={(e)=>{setDescription(e.target.value)}} placeholder='Enter Description'/>
        <button onClick={()=>{dispatch(addPost({id:posts.length +1, title, description}))}} >Save</button>
      </div>

      <div className='posts'>
       {
        posts.length >0 ? (posts.map(
          (post)=>
          <div className='post'>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
          <button onClick={()=>{setEdit(true)
             setId(post.id)}}>Update</button>
          <button onClick={()=>{dispatch(deletePost({id:post.id}))}}>Delete</button>
          <br></br>
          {
            edit && id === post.id && (
              <>
              <input type='text' onChange={(e)=>{setUpdateTitle(e.target.value)}} placeholder='Enter Title'/>
              <input type='text' onChange={(e)=>{setUpdateDescription(e.target.value)}} placeholder='Enter Description'/>
              <button onClick={()=>{dispatch(updatePost({id:post.id, title:updateTitle, description: updateDescription}))}} >Update</button>
              </>
            )
          }
        
         </div>
         )
         
       ):'There Not Posts'
       }
    
  
      </div>
    </Fragment>
  )
}

export default Posts