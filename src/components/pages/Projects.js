import React from 'react'
import '../../App.css'
import './Projects.css'
import Footer from '../Footer'

export default function Projects() {
    return (

    <div id="layout" class="pure-g">

    <div class="sidebar pure-u-1 pure-u-md-1-4">
        <div class="header">
            <h1 class="brand-title">My Projects</h1>
            <h2 class="brand-tagline">With Descriptions</h2>
        </div>
     </div>
    

        <div class="posts">
        <h1 class="content-subhead">Recent Project</h1>

        <section class="post">
            <header class="post-header">
                <h2 class="post-title">Portfolio website</h2>
            </header>
            <div class="post-description">
                <p>
                    The website you're viewing right now is my portfolio website. The site is created using JS, React, HTML, CSS, FontAwesome. 
                    I created this site as a way to learn javascript as well as react and it is my first react project. The site also 
                    serves as a portfolio page for my resume. This site is hosted using Netlify.
                </p>
            </div>
        </section>

        <div class="posts">
                <h1 class="content-subhead">Projects</h1>

        <section class="post">
            <header class="post-header">
                <h2 class="post-title">Alternative fuel</h2>
            </header>
            <div class="post-description">
                <p>
                  This was a three-person team project where we created an entity-relationship diagram and additionally we created schemas based on 
                  the diagram and then created sql statements to create our database which lived on AWS cloud. We had freedom over what 
                  to make a database on and we chose to do a dealership Moc because it was interesting and it gave us many options for 
                  example we stored alternative vehicles that are hybrid, electric, fuel cell and other types with their relevant specifications.
                  I was responsible for inserting the information into the tables, testing if theyre in there, creating the trigger and stored procedure.
                  <br />
                  Tools used: MySQL workbench, SQL, AWS, HTML, CSS
                </p>
            </div>
        </section>

        <section class="post">
            <header class="post-header">
                <h2 class="post-title">Learn Java app</h2>
            </header>
            <div class="post-description">
                <p>
                This project was a four-person team project where we created an application utilizing Android Studio, Java programming, GitHub,
                and the agile software development process. This application was designed to teach any beginner the basics of Java introductory 
                programming. The idea was similar to duolingo but instead it was for programming languages. In addition to the programming aspects
                of the project, I was in charge of designing the app, revewing test cases, and assisted with sprint retrospective.
                </p>
            </div>
        </section>

        <section class="post">
            <header class="post-header">
                <h2 class="post-title">Minigolf-scorecard app</h2>
            </header>
            <div class="post-description">
                <p>
                This was another four-person team project where we created a simple scorecard application for minigolf as a final class assignment. 
                This application was created utilizing Android Studio, Github, Adobe XD, and Java programming. I was in charge of designing the overall 
                theme and look of the app, programmed the logic for calculating scores with par, assisted with further programming aspects, 
                testing of the app, and made sure bi-weekly deliverables were submitted by the due date. This app is avaliable to download from the google play store.
                </p>
            </div>
        </section>

        </div>
    </div>
    <Footer />
</div>
)

}