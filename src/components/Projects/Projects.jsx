import React, { Component } from 'react'
import './Projects.css'

class Projects extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card-container">
                {/* Project One */}
                <div className="card">
                    <img src="/images/vocabulary.png" alt="Screenshot of bilingüe app" width="350"/>
                    <div className="card-text">
                        <h4>bilingüe</h4>
                        <p>A full CRUD app built with Django and Python for maintaining Spanish language skills. Designed with pure CSS.</p>
                        <div className="btn-box">
                            <a href="https://bilingue-skills.herokuapp.com/"><button className="link">Open App</button></a>
                            <a href="https://github.com/23carnies/bilingue"><button className="code">View Code</button></a>
                        </div>
                    </div>
                </div>
                {/* Project Two */}
                <div className="card">
                    <img src="/images/MakerStore.png" alt="Screenshot of Meet Your Maker app" width="350"/>
                    <div className="card-text">
                        <h4>Meet Your Maker</h4>
                        <p>A full CRUD MERN stack app connecting urban farmers and makers with local buyers. A group project that utilizes AWS-SDK and Semantic UI for React.</p>
                        <div className="btn-box">
                            <a href="https://meetyourmaker925.herokuapp.com/"><button className="link">Open App</button></a>
                            <a href="https://github.com/23carnies/MeetYourMakerCoupled"><button className="code">View Code</button></a>
                        </div>
                    </div>
                </div>
                {/* Project Three */}
                <div className="card">
                    <img src="/images/dailyWod.png" alt="Screenshot of wodWizard app" width="350"/>
                    <div className="card-text">
                        <h4>wodWizard</h4>
                        <p>A full CRUD Express and NodeJS app for daily workouts and workout tracking utilizing Bootstrap for styling.</p>
                        <div className="btn-box">
                            <a href="https://wodwizard.herokuapp.com/"><button className="link">Open App</button></a>
                            <a href="https://github.com/23carnies/wodWizard"><button className="code">View Code</button></a>
                        </div>
                    </div>
                </div>
                {/* Project Four */}
                <div className="card">
                    <img src="/images/rouletteWheelColorsFull.png" alt="Screenshot of Psychedelic Roulette app" width="350"/>
                    <div className="card-text">
                        <h4>Psychedelic Roulette</h4>
                        <p>A vibrant, digital update to the centuries old table game. Built using HTML, pure CSS, and vanilla Javascript.</p>
                        <div className="btn-box">
                            <a href="http://psychedelic-roulette.surge.sh/"><button className="link">Open App</button></a>
                            <a href="https://github.com/23carnies/psychedelicRoulette"><button className="code">View Code</button></a>
                        </div>
                    </div>
                </div>
                {/* Project Five */}
                <div className="card">
                    <img src="https://picsum.photos/350" alt="Placeholder photo" width="350"/>
                    <div className="card-text">
                        <h4>Portfolio</h4>
                        <p>This portfolio is built in React and designed in pure CSS.</p>
                        <div className="btn-box">
                            <a href="#"><button className="link">Open App</button></a>
                            <a href="https://github.com/23carnies/klp-portfolio"><button className="code">View Code</button></a>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Projects;