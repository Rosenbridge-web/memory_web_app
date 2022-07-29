import { Button, Card, CardMedia, Typography } from '@material-ui/core'
import React from 'react'
import moment from 'moment'
import useStyles from './styles'

const Post = ({posts}) => {
  const classes = useStyles() 
  return (
    <Card className={classes.card} >
        <CardMedia  className={classes.media} image={posts.selectedFile} title={posts.title} />
        <div>
          <Typography variant='h6'>{posts.creator}</Typography>
          <Typography variant='body2'>{moment(posts.createdAt).fromNow()}</Typography>
        </div> 
        <div className={classes.overlay} >
          <Button style={{color:'white'}} size='small' onClick={() => {}}>  
          </Button>
        </div> 
    
    
    
    </Card>
    
  )
}

export default Post