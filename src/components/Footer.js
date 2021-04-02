import React from 'react'
import './Footer.css'
import { Button } from './Button'



function Footer() {
    return (
        <div className='footer-container'>
            <section className="footer-footer">
                <h1>More Links below!</h1>
            </section>
            <div className="footer-links">
                <div className="footer-links-wrapper">
                    <div className="footer-link-items">
                        <h2>Links</h2>
                        <a target='_blank' href="https://www.linkedin.com/in/tien-tommy-cao-163437194/">LinkedIn  <i className='fab fa-linkedin' /></a>
                        <a target='_blank' href="https://github.com/caotd2">GitHub  <i className='fab fa-github' /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
