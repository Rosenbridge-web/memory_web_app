
export default  (posts=[]  , action) => {
  switch (action.type) {
    case "FETCH_ALL":
        return action.payload
      
    case "CREATE" :

    return {
      ...posts , 
      selected  : action.payload 
    }
        
        
    default:    
        return posts 
    
  }
}