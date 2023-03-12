import React from 'react'
import './Timeline.css'
import logo from './Images/Vector.png'
import logo2 from './Images/Two.png'
import logo3 from './Images/Three.png'
import logo4 from './Images/four.png'
import logo5 from './Images/five.png'

function Timelins() {
  return (
    <>
        <div className='border'>
                <div className='head'>
                    <h1>Timeline</h1>
                </div>
            <div className='pattern'>
                <div className='flex'>
                    <div className='image'>
                        <img src={logo} />
                    </div>
                    <div className='wrapper'>
                        <h2>UI/UX Design Fundamentals</h2>
                        <p>Principles, Processes</p>
                    </div>   
                </div>
                <div className='time-div'>
                    <h2 className='time'>1 PM to 2 PM</h2>
                </div>
            </div>
            <div className='pattern'>
                <div className='flex'>
                    <div className='image'>
                        <img src={logo2} />
                    </div>
                    <div className='wrapper'>
                        <h2>Hands On Design on Figma</h2>
                        <p>Wireframing, Visual Design & Prototyping</p>
                    </div>   
                </div>
                <div className='time-div'>
                    <h2 className='time'>2 PM to 3 PM</h2>
                </div>
            </div>
            <div className='pattern'>
                <div className='flex'>
                    <div className='image'>
                        <img src={logo3} />
                    </div>
                    <div className='wrapper'>
                        <h2>Group Activity</h2>
                        <p>Surprise design activity, best participants will
                        get rewarded</p>
                    </div>   
                </div>
                <div className='time-div'>
                    <h2 className='time'>3:20 PM to 3:40 PM</h2>
                </div>
            </div>
            <div className='pattern'>
                <div className='flex'>
                    <div className='image'>
                        <img src={logo4} />
                    </div>
                    <div className='wrapper'>
                        <h2>Case Studies & Jobs</h2>
                        <p>How to make case studies for your portfolio and apply 
                        for your first job</p>
                    </div>   
                </div>
                <div className='time-div'>
                    <h2 className='time'>3:40 PM to 4 PM</h2>
                </div>
            </div>
            <div className='pattern'>
                <div className='flex'>
                    <div className='image'>
                        <img src={logo5} />
                    </div>
                    <div className='wrapper'>
                        <h2>Ask Anything Session</h2>
                        <p>Open QnA session on topics like Careers in design, 
                        Hackathons, Freelancing, Placements, etc.</p>
                    </div>   
                </div>
                <div className='time-div'>
                    <h2 className='time'>4 PM to 4:15 PM</h2>
                </div>
            </div>
        </div>
    </>
  )
}

export default Timelins