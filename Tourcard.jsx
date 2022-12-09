import { FavoriteSharp, MoreVert,  Share, VolumeDown, VolumeUp, VolumeUpOutlined } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia,  IconButton, Rating, Slider, Typography } from '@mui/material'
import { blue, green, red } from '@mui/material/colors'
import React from 'react'

export const Tourcard = () => {
  return (
    
    <div>

< Card sx={{ maxWidth: 800,marginTop:2 } } >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[500] }} aria-label=" beautiful sea">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title=" A perfect holidy spot"
        
      />
      <CardMedia
        component="img"
        height="500"
        image={require('../images/y.jpg')}
        alt="sea"
      />
      
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
        
        </CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteSharp/>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <Rating name='click' value={4}/>

        
      </CardActions>
       
    
    </Card>
    < Card sx={{ maxWidth: 800,marginTop:2 } } >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: green[500] }} aria-label=" beautiful sea">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        
            title=" wonderla"
    
        
      />
      
      <CardMedia
        component="img"
        height="500"
        image={require('../images/d.jpg')}
        alt="sea"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
        
        </CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteSharp/>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <Rating name='click' value={4}/>

        
      </CardActions>
       
    
    </Card>
    < Card sx={{ maxWidth: 800,marginTop:2 } } >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label=" beautiful sea">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title=" temple city"
        
      />
      
      <CardMedia
        component="img"
        height="500"
        image={require('../images/a.jpg')}
        alt="sea"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
        
        </CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteSharp/>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <Rating name='click' value={4}/>

        
      </CardActions>
       
    
    </Card>
    < Card sx={{ maxWidth: 800,marginTop:2 } } >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label=" beautiful sea">
            
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title=" mahabaliburam"
        
      />
      
      <CardMedia
        component="img"
        height="500"
        image={require('../images/e.jpg')}
        alt="sea"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
        
        </CardContent>
      <CardActions>
      <IconButton aria-label="add to favorites">
          <FavoriteSharp/>
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
        <Rating name='click' value={4}/>
        

        
      </CardActions>
       
    
    </Card>
    </div>

  )
}
