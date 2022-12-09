

import {Stack} from '@mui/system' ;
import { Menu } from './components/Menu';
import { Content } from './components/Content';
import { Tool } from './components/Tool';
import { Box, Container } from '@mui/material';
import { Nav } from './components/Nav';


function App() {

  

  return (

    <Box>
       
      <Nav/>
<Container maxWidth='xl'>
<Stack direction='row' spacing={2} justifyContent='space-between'>
  <Menu/>
  <Content/>
  <Tool />


</Stack>
 </Container>
    </Box>
 

      
         
    

    
   
   
    
  );
}

export default App;
