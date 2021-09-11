import React from 'react'
import '../../App.css'
import Footer from '../Footer'
import './Experience.css'
import '../Navbar.css'

export default function Experience() {
    
    return (
    <div id="layout" class="pure-g">

    <div class="sidebar pure-u-1 pure-u-md-1-4">
        <div class="header">
            <h1 class="brand-title">My Experience</h1>
            <h2 class="brand-tagline">& Skills</h2>
        </div>
     </div>
    

        <div class="posts">
        <h1 class="content-subhead">Skills</h1>

        <section class="post">
            <header class="post-header">
                <h2 class="post-title">Languages/Frameworks</h2>
            </header>
            <div class="post-description">
                <div>
                <ul class='list2'>
                    <li>Java</li> 
                    <li>AWS</li> 
                    <li>Python</li> 
                    <li>MySql</li> 
                    <li>C</li> 
                    <li>Adobe XD</li> 
                    <li>JavaScript</li> 
                    <li>Android Studio</li> 
                    <li>Linux</li> 
                    <li>Unit Testing</li> 
                    <li>React</li> 
                    <li>Microsoft office</li> 
                    <li>Github</li> 
                    <li>Flask</li>
                    <li>Bootstrap</li>
                    <li>Operating Systems</li>
                    <li>UX/UI design</li>
                </ul>
                <br />
            </div>
              
            </div>
        </section>

        <div class="posts">
                <h1 class="content-subhead">Work Experience</h1>

        <section class="post">
            <header class="post-header">
                <h2 class="post-title">Virginia Premier Health Plan</h2>
                <h4>Summer Intern • June 2017 to August 2019 </h4>
            </header>
            <div class="post-description">
                
                <p>
                <h4>Network Development Department:</h4>

               <li> Answered telephone calls, provided information to providers and clients, and relayed messages to appropriate supervisors. Also conducted routine quality assurance calls.</li>
               <li> Interacted with providers professionally by phone, email or in-person to provide information and directed to desired staff members.</li>
               <li>Sorted and organized materials such as physical files, tracking spreadsheets and reports.</li>
                </p>

                <p>
                <h4>Financial Department:</h4>

               <li> Assisted with month-end closing processes and verified journal entries.</li>
               <li> Assisted with account reviews and preparation for account reviews.</li>
               <li>Displayed collaborative abilities through working with a team to meet deadlines.</li>
               <li>Managed expenses and accounts of managers/team leaders in the company.</li>

                </p>
            </div>
        </section>

        </div>
    </div>
    <Footer />
</div>
    )

}