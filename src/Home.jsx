import React from 'react'
import './Home.css'
import logo from './Images/geny-logo.png'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function Home() {
  return (
    <>
        <div className='logo-div'>
            <img className='logo' src={logo} />
        </div>
        <div className='middle-div' >
            <p className='para'>Team Gen-Y presents</p>
            <h1 className='heading'>UI/UX Masterclass</h1>
            <div className='inner-div'>
                <div>
                <CalendarTodayIcon className='calender'/>
                <p className='para1'>28 February 2023</p>
                </div>
                <div>
                <AccessTimeIcon/>
                <p>1:00 PM to 4:00 PM</p>
                </div>
                <div>
                <LocationOnIcon/>
                <p>Mini Hall 2, SRMIST</p>
                </div>
            </div>
            <div className='para2'>
                <p>Lorem ipsum dolor sit amet consectetur. Ridiculus mi volutpat bibendum in proin quisque. Semper a sollicitudin accumsan gravida elementum mattis duis vel. Vel sapien venenatis ornare ipsum vestibulum. Nulla urna id risus consectetur fermentum urna faucibus sagittis facilisi. Nullam leo feugiat.</p>
            </div>
            <button className="reg-button">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div>Register Now</div>
            <div>
              <ArrowCircleRightIcon style={{ marginTop: "2px" }} />
            </div>
          </div>
        </button>
        </div>
    </>
  )
}

export default Home