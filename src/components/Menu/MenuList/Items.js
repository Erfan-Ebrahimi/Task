import { useState , useEffect } from 'react';

import Item from './Item';


// ----------ICONS -------- //
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WalletIcon from '@mui/icons-material/Wallet';
import ForumIcon from '@mui/icons-material/Forum';
import ShareIcon from '@mui/icons-material/Share';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import LogoutIcon from '@mui/icons-material/Logout';

//---------SWIPER -----//
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Items = () => {

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

  if(isMobile){
    return(
      <nav>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={1}
          slidesPerView={3}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide><Item icon={<PersonOutlineIcon sx={{margin:'0px !important',width:50}} />} name='اطلاعات پروفایل' to='/' /></SwiperSlide>
          <SwiperSlide><Item icon={<CalendarMonthIcon sx={{margin:'0px !important',width:50}}/>} name='برنامه هفتگی' to='/plan'/></SwiperSlide>
          <SwiperSlide><Item icon={<FavoriteBorderIcon sx={{margin:'0px !important',width:50}}/>} name='غذاهای مورد علاقه' to='/e'/></SwiperSlide>
          <SwiperSlide><Item icon={<WalletIcon sx={{margin:'0px !important',width:50}}/>} name='اشتراک و پرداخت ها' to='/r'/></SwiperSlide>
          <SwiperSlide><Item icon={<ForumIcon sx={{margin:'0px !important',width:50}}/>} name='پیام ها و گفتگوها'  to='/f'/></SwiperSlide>
          <SwiperSlide><Item icon={<ShareIcon sx={{margin:'0px !important',width:50}}/>} name='معرفی به دوستان' to='/g'/></SwiperSlide>
          <SwiperSlide><Item icon={<MilitaryTechIcon sx={{margin:'0px !important',width:50}}/>} name='جایزه ها' to='/h'/></SwiperSlide>
          <SwiperSlide><Item icon={<LogoutIcon sx={{margin:'0px !important',width:50,color:'red'}}/>} name='خروج' to='/n'/></SwiperSlide>
        </Swiper>
      </nav>
    )
  }  



  return (
    <nav>
        
        <Item  icon={<PersonOutlineIcon sx={{margin:'0px !important',width:50}} />} name='اطلاعات پروفایل' to='/'/>
        <Item icon={<CalendarMonthIcon sx={{margin:'0px !important',width:50}}/>} name='برنامه هفتگی' to='/plan'/>
        <Item icon={<FavoriteBorderIcon sx={{margin:'0px !important',width:50}}/>} name='غذاهای مورد علاقه' to='/e'/>
        <Item icon={<WalletIcon sx={{margin:'0px !important',width:50}}/>} name='اشتراک و پرداخت ها' to='/r'/>
        <Item icon={<ForumIcon sx={{margin:'0px !important',width:50}}/>} name='پیام ها و گفتگوها' to='/f'/>
        <Item icon={<ShareIcon sx={{margin:'0px !important',width:50}}/>} name='معرفی به دوستان' to='/g'/>
        <Item icon={<MilitaryTechIcon sx={{margin:'0px !important',width:50}}/>} name='جایزه ها' to='/h'/>
        <Item icon={<LogoutIcon sx={{margin:'0px !important',width:50,color:'red'}}/>} name='خروج' to='/n'/>
    </nav>
  )
}

export default Items;