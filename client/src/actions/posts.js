import { useDispatch } from 'react-redux'
import { fetchPosts  , createPosts, updatePosts, deletePosts} from '../api/Api'

//action creators

export const getPosts = () => async(dispatch) => 
{
  try {
    const {data} = await fetchPosts()
    dispatch({type : 'FETCH_ALL', payload : data  })
  } catch (error) {
    console.log(error.message)
  }
}
export const createPost = (post)  => async(dispatch ) =>  {
  try {
    const {  data }  = await createPosts( post ) 
    dispatch({type:'CREATE' , payload : data })  
    
  } catch (error) {
   console.log(error.message) 
  }
}

export const updatePost = (id , post) => async(dispatch)  => {
   try{
    const { data }  = await updatePosts(id , post)
    dispatch({type : 'UPDATE' , payload : data})
   }
   catch(error ) {
    console.log(error.message)
   }

}

export const deletePost =(id) => async(dispatch ) => {
  try {
     await deletePosts(id)
     dispatch({ type: 'DELETE' , payload : id})

  } catch (error) {
    console.log(error.message)
  }
}