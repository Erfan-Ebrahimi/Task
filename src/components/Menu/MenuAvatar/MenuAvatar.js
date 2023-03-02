import { Avatar, Box, Typography } from '@mui/material';
import imgProf from "../../../assets/imgProf.webp" 

const MenuAvatar = () => {
  return (
    <Box sx={{
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        height: 140,
        display:'flex',
      }}>
        <Avatar alt="Remy Sharp" src={imgProf} sx={{
          width:70,
          height:70,
          border:'1px solid red',

        }} />
        <Box sx={{marginRight:1,display:'flex',flexDirection:'column'}}>
            <Typography variant='body1' align='right'>محمد ابراهیمی</Typography>
            <Typography variant='caption' align='right'>بدون اشتراک</Typography>
        </Box>
    </Box>
  )
}

export default MenuAvatar;