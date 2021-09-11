import React from 'react'
import NavItem from './NavItem'
import './NavCards.css'


function NavCards() {
    return (
        <div className='navcards'>
            <h1>Click to View!</h1>
            <div className="navcards_container">
                <div className="navcards_wrapper">
                    <ul className="navcards__items">
                        <NavItem 
                        src="images/back.jpeg"
                        text="More on Tommy"
                        label="About Me"
                        path='/aboutme'
                        />
                        <NavItem 
                        src="images/back.jpeg"
                        text="My Experience"
                        label="Knowledge"
                        path='/experience'
                        />
                        <NavItem 
                        src="images/back.jpeg"
                        text="View Projects"
                        label="Projects"
                        path='/projects'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavCards
