import { useState , useEffect } from 'react';
import { Box } from '@mui/material';
import React from 'react'
import MenuAvatar from './MenuAvatar/MenuAvatar';
import Items from './MenuList/Items';

const Menu = () => {

const [isMobile, setIsMobile] = useState(false)
 
//choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 900) {
      setIsMobile(true)
  } else {
      setIsMobile(false)
  }
}

// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})

  return (
    <Box sx={{
      width: {xs:'100%' , md:"30%"},
      height: {xs:140,md:677},
      display:'flex',
      flexDirection:'column',
    }}>
        {!isMobile ? <MenuAvatar/> : ''} 
        <Items/>
    </Box>
  )
}

export default Menu;









