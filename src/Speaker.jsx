import React from 'react'
import './speaker.css'
import image from './Images/speaker1.png'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import image2 from './Images/speaker2.png'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';



function Speaker() {
  return (
    <>
        <div className='speaker' >
            <div className='main-div'>
                <div className='image-div'>
                    <img className='image1' src={image} />
                    <div className='linkdin'>
                        <LinkedInIcon className='linkdin-icon' />
                        <a>Connect on Linkdin</a>
                    </div>
                </div>
                <div>
                    <div className='content'>
                        <h2 className='name'><b>Shwet Mishra</b></h2>
                        <p>SDE at American Express</p>
                        <p>Former Creatives Head at Team Gen-Y With 4+ years of experience in full stack designing, including graphic designing, ui/ux designing & front-end development.Worked with multiple startups and MNCsHuge experience in National Level Hackathons with track record of 9 winnings, also recently won SIH'22 as a mentor.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className='speaker sp2 ct' >
            <div className='main-div'>
                <div className='image-div'>
                    <img className='image1' src={image2} />
                    <div className='linkdin'>
                        <LinkedInIcon className='linkdin-icon' />
                        <a>Connect on Linkdin</a>
                    </div>
                </div>
                <div>
                    <div className='content'>
                        <h2 className='name'><b>Ayush Choudhary</b></h2>
                        <p>Product Designer at ProGrad</p>
                        <p>Former Head at Team Gen-Y With 3+ years of experience in full stack designing, including graphic designing, ui/ux designing & front-end development.Worked with multiple startups</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='btn-div'>
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

export default Speaker