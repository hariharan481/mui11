import React from 'react'
import { Box} from '@mui/system'
import { ImageList, ImageListItem, Typography } from '@mui/material';

export const Tool = () => {
  const itemData = [
    {
      img: 'https://2.bp.blogspot.com/-bfdmvxbXOE8/VB_uxG-2g3I/AAAAAAAAGO4/fFatJXQAvsc/s1600/Ooty.jpg',
      title: 'Breakfast',
    
      
    },
    {
      img: 'https://assets-news.housing.com/news/wp-content/uploads/2022/07/28213939/kanyakumari-sightseeing-and-things-to-do-FEATURE-compressed.jpg',
      title: 'Burger',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSizoG3ZGguw2sSy-5PgrL6P_nTt5zaCJJ9IA&usqp=CAU',
      title: 'Camera',
    },
    {
      img: 'https://www.transindiatravels.com/wp-content/uploads/kanyakumari-2.jpg',
      title: 'Coffee',
      
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQR7S9954KKsVGtlXWElOAcPr7j5IBv4vx3Q&usqp=CAU',
      title: 'Hats',
      
    },
    {
      img: 'https://www.holidify.com/images/bgImages/CHETTINAD.jpg',
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://www.trawell.in/images/pics/sm/uttar-pradesh_best_main_sm.jpg',
      title: 'Basketball',
    },
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZAYHGaTHnMXdiQIFE9QgquQb_JttaxGLSnQ&usqp=CAU',
      title: 'Fern',
    },
    {
      img: 'https://i0.wp.com/www.tusktravel.com/blog/wp-content/uploads/2019/07/fixedw_large_4x.jpg?fit=1224%2C816&ssl=1',
      title: 'Mushrooms',
      rows: 2,
      cols: 2,
    },
    {
      img: 'https://www.hlimg.com/images/stories/738X538/Thanjavur_1429942349u90.jpg?w=480&dpr=2.6',
      title: 'Tomato basil',
    },
    {
      img: 'https://media.easemytrip.com/media/Blog/India/637013873961494388/6370138739614943885MpzQ4.jpg',
      title: 'Sea star',
    },
    {
      img: 'https://qph.cf2.quoracdn.net/main-qimg-7fb878ce92de7adf1bc13c5b8f249f67-lq',
      title: 'Bike',
      cols: 2,
    },
  ];
  return (
    <Box  flex={1}>
      <Box position='fixed'>
    
      <Typography variant='h4' sx={{marginTop:2}}> Gallery</Typography>
     <ImageList sx={{ width: 450, height: 600 ,marginTop:2}} cols={3} rowHeight={200}>
  {itemData.map((item) => (
    <ImageListItem key={item.img}>
      <img
        src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
       // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
</Box>
    </Box>
  )
}
