import React from 'react'
import '../../App.css'
import './AboutMe.css'
import Footer from '../Footer'

export default function AboutMe() {

  return (

    <div id="layout" class="pure-g">

    <div class="sidebar pure-u-1 pure-u-md-1-4">
        <div class="header">
            <h1 class="brand-title">Hello</h1>
            <h2 class="brand-tagline">Everyone</h2>
        </div>
     </div>
    

        <div class="posts">
        <h1 class="content-subhead">Summary</h1>

        <section class="post">
            
            <div class="post-description">
                <p>
                I am a hardworking and optimistic software developing student offering many positive qualities including,
                but not limited to, determination, eagerness to learn, leadership and collaborative 
                qualities, and drive to improve.
                </p>
            </div>
        </section>

        <div class="posts">
                <h1 class="content-subhead">Qualities</h1>

        <section class="post">
           
            <div class="post-description">
            <div>
                <ul class='list1'>
                    <li>Collaborative</li> 
                    <li>Adaptability</li> 
                    <li>Quick Learner</li> 
                    <li>Leadership skills</li> 
                    <li>optimistic</li> 
                    <li>self-motivated</li> 
                    <li>optimistic</li> 
                    <li>Flexibility</li> 
                    <li>Dependable</li>
                   
                </ul>
                <br />
            </div>
            </div>
            
        </section>

        </div>
        <div class="posts">
                <h1 class="content-subhead">Education</h1>

        <section class="post">
           
            <div class="post-description">
                <p>
                <h2>VIRGINIA COMMONWEALTH UNIVERSITY</h2>
                BACHELORS • Computer Science/Software Development • December 2021 • GPA: 3.24
                <br />
                <h3>Relevant Courses</h3>
                Database theory, Software engineering specs and dev, 
                Algorithm Analysis/Advance Data Structure, Data structure & Object prog, 
                Des & Implement User Interface
                </p>
            </div>
        </section>
        </div>
    </div>
    <Footer />
</div>
)

}