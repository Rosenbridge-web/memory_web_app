
import mongoose from "mongoose"
import PostMessage  from "../models/postMessage.js"

export const getPosts = async (req , res )  => {
    try{
      const postMessage = await PostMessage.find()
      res.status(200).json(postMessage)
    }
    catch (error) {
    
        res.status(400).json({message : error.message })

    }
}


export const createPost = async(req, res )  => {
    const post  = req.body ;
    const newPost =  new PostMessage(post )
    try {
        await newPost.save()
        res.status(200).json(newPost)
    }
    catch (error) {
        res.status(409).json({message : error.message })

    }
}

export const updatePost = async(req , res ) => {
    const {id  : _id} =req.params
    const post  = req.body 
  try {

     if(!mongoose.Types.ObjectId.isValid(_id) ) return res.status(404).send(" post not found ")
    const updatedPost= await  postMessage.findByIdAndUpdate(_id , post  , {new : true }) 
    res.send(updatedPost)
   } catch (error) {
    res.status().json({message : error.message})
}   
}
 
export const deletePost = async(req , res ) => {
    const {id : _id  } = req.params 

    
    try {
        if(!mongoose.Types.ObjectId.isValid(_id) )  
        {return res.status(404).send(" object not in the database") }

        await postMessage.findByIdAndRemove(id)

        console.log('DELETE!')        
     } catch (error) {
        res.status(410).json({message:error.message})
     }
}