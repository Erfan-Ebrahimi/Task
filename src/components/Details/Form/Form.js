import imgProf from "../../../assets/imgProf.webp";
import { useState } from "react";
import { Avatar, TextField , Select , MenuItem,FormControl, RadioGroup, FormControlLabel, Radio, ButtonGroup, Button, Container, Box, Typography} from "@mui/material";


const Form = () => {

    const[name , setName] = useState('محمد ابراهیمی');    
    const[date , setDate] = useState('');
    const[city , setCity] = useState('استان');
    
    const handleCity = () => {
        console.log('red');
    }
  return (
    <Container 
        sx={{
            paddingTop:5.7,
            width:{xs:"100%"},
            textAlign:{xs:'center',lg:'right'}
    
    }}>
        <form>
            <Typography variant="h6" sx={{textAlign:{xs:'center',md:'right'}}}>ویرایش پروفایل</Typography>
            <Box>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <Avatar src={imgProf} alt="imgProf" sx={{width:100,height:100,marginRight:'40%'}}/>
                    {/* <InputLabel  htmlFor="file"><CameraAltIcon sx={{borderRadius:'50px', bgcolor:'#FDA239', color:'#fff',padding:.5,cursor:'pointer'}}/></InputLabel>
                    <TextField type="file" id="file" sx={{display:'none'}}/> */}
                    <TextField  size="small" sx={{}}  margin="dense" defaultValue={name}/>
                    <TextField size="small" sx={{}} margin="dense" type='date' defaultValue={date} placeholder='0'  inputProps={{placeholder:'red',}}/>
                    <Select
                    size="small"
                        value={city}
                        onChange={handleCity}
                        sx={{marginTop:1}}
                        
                    >
                        <MenuItem value='استان' selected>استان</MenuItem>
                        <MenuItem value='Esfahan' >اصفهان</MenuItem>
                        <MenuItem value='Tehran'>تهران</MenuItem>
                        <MenuItem value='Arak'>اراک</MenuItem>
                    </Select>
                    <Box sx={{textAlign:'right',position:'relative',right:'-27px',marginTop:1}}>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="مجرد"
                            name="gender"
                            sx={{display:'flex',flexDirection:'row'}}
                            
                        >
                            <FormControlLabel value="مجرد" control={<Radio sx={{color:'#0000004', '&.Mui-checked':{color:'#B0BF24'}}} />} label="مجرد" />
                            <FormControlLabel sx={{marginRight:'27px'}} value="متاهل" control={<Radio sx={{color:'#0000004', '&.Mui-checked':{color:'#B0BF24'}}} />} label="متاهل" />
                        </RadioGroup>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="شاغل"
                            name="job"
                            sx={{display:'flex',flexDirection:'row'}}
                        >
                            <FormControlLabel value="خانه دار" control={<Radio  sx={{color:'#0000004', '&.Mui-checked':{color:'#B0BF24'}}} />} label="خانه دار" />
                            <FormControlLabel value="شاغل" control={<Radio  sx={{color:'#0000004', '&.Mui-checked':{color:'#B0BF24'}}}/>} label="شاغل" />
                        </RadioGroup>
                    </Box>
                    <ButtonGroup
                        sx={{marginTop:2}}
                        disableElevation
                        aria-label="Disabled elevation buttons"
                    >
                        <Button variant="contained" size="medium" sx={{bgcolor:'#B0BF24',width:'200px'}}>ذخیره اطلاعات</Button>
                        <Button size="medium" sx={{marginRight:1,width:'200px',color:'#B0BF24',borderColor:'#B0BF24'}}>انصراف</Button>
                    </ButtonGroup>
                </FormControl>
            </Box>
        </form>
        
    </Container>
  )
}

export default Form;