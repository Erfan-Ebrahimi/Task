
import { NavLink } from 'react-router-dom';
import './item.css';

import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import {Typography } from '@mui/material';
const Item = (props) => {



  
  
  return (
    <NavLink 
      to={props.to}
      className='link'       
    >
      <ListItemButton 
      sx={{
        height:{xs:100,md:'auto'},
        display:'flex',
        flexDirection:{xs:'column',md:'row'},
        textAlign:{xs:'center',md:'right'},
        alignItems:'center',
        gap:'0px !important',
        // paddingX:4,
        marginX:1,
        marginTop:1,
        paddingY:{xs:3,md:1},
        borderRadius:1,
        border:{xs:'1px solid #00000099',md:'none',lg:'none'},
        
        
        }} 
         
      >
        <ListItemIcon   sx={{paddingRight:2,margin:0,marginLeft:'0px !important',width:'20px !important'}}>
          {props.icon}
        </ListItemIcon>
        <Typography sx={{width:'100%',padding:0, marginRight:0,fontSize:{xs:'13px',md:'18px'}}}>{props.name}</Typography>
      </ListItemButton>
    
    </NavLink>
  
  )
}

export default Item;