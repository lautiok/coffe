import React from 'react'
import './TeamModule.css'
import team1 from '../../../assets/team-uno.jpg'
import team2 from '../../../assets/team-dos.jpg'
import team3 from '../../../assets/team-tres.jpg'
import team4 from '../../../assets/team-cuatro.png'
export const Team = () => {
    return (
        <div className='team-container'>
            <h1>Meet the team</h1>
            <div className='team-card'>
                <div className='card'>
                    <img src={team1} alt="team" />
                </div>
                <div className='card'>
                    <img src={team2} alt="team" />
                </div>
                <div className='card'>
                    <img src={team3} alt="team" />
                </div>
                <div className='card'>
                    <img src={team4} alt="team" />
                </div>
            </div>
        </div>
    )
}
