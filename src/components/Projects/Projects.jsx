import React, { Component } from 'react'
import './Projects.css'

class Projects extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card-container">
                {/* Project One */}
                <div className="card">
                    <img src="" alt=""/>
                    <div className="card-text">
                        <h4>bilingüe</h4>
                        <p>A full CRUD app built with Django and Python for maintaining Spanish language skills. Designed with pure CSS.</p>
                        <div className="btn-box">
                            <button className="link">Open App</button>
                            <button className="code">View Code</button>
                        </div>
                    </div>
                </div>
                {/* Project Two */}
                <div className="card">
                    <img src="" alt=""/>
                    <div className="card-text">
                        <h4>Meet Your Maker</h4>
                        <p>A full CRUD MERN stack app connecting urban farmers and makers with local buyers. A group project that utilizes AWS-SDK and Semantic UI for React.</p>
                        <div className="btn-box">
                            <button className="link">Open App</button>
                            <button className="code">View Code</button>
                        </div>
                    </div>
                </div>
                {/* Project Three */}
                <div className="card">
                    <img src="" alt=""/>
                    <div className="card-text">
                        <h4>wodWizard</h4>
                        <p>A full CRUD Express and NodeJS app for daily workouts and workout tracking utilizing Bootstrap for styling.</p>
                        <div className="btn-box">
                            <button className="link">Open App</button>
                            <button className="code">View Code</button>
                        </div>
                    </div>
                </div>
                {/* Project Four */}
                <div className="card">
                    <img src="" alt=""/>
                    <div className="card-text">
                        <h4>Psychedelic Roulette</h4>
                        <p>A vibrant, digital update to the centuries old table game. Built using HTML, pure CSS, and vanilla Javascript.</p>
                        <div className="btn-box">
                            <button className="link">Open App</button>
                            <button className="code">View Code</button>
                        </div>
                    </div>
                </div>
                {/* Project Five */}
                <div className="card">
                    <img src="" alt=""/>
                    <div className="card-text">
                        <h4>Portfolio</h4>
                        <p>This portfolio is built in React and designed in pure CSS.</p>
                        <div className="btn-box">
                            <button className="link">Open App</button>
                            <button className="code">View Code</button>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Projects;