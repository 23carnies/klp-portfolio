import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Projects.css'



                // <button
                //   className={props.tacoIdx === idx ? 'selected' : ''}
                //   onClick={() => {props.handleBiteTaco(idx)}}
                // >
                //   {props.tacoIdx===idx ? `Taco ${idx+1} Selected` : `Select Taco ${idx+1}`}  
                // </button>


const cardNum = ['0', '1', '2', '3', '4']

class Projects extends Component {
    state = { 
        cardOpen: false,
        // cardIdx: 0,
        projects: [
            {   
                cardIdx: 0,
                img: "/images/bilingueSquareLarge.png",
                alt: "Screenshot of bilingüe app",
                title: "bilingüe",
                description: "A full CRUD app built with Django and Python for maintaining Spanish language skills. Designed with pure CSS.",
                link: "https://bilingue-skills.herokuapp.com/",
                code: "https://github.com/23carnies/bilingue"
            },
            {   
                cardIdx: 1,
                img: "/images/MYMLogoNoBkgr.png",
                alt: "Screenshot of Meet Your Maker app",
                title: "Meet Your Maker",
                description: "A full CRUD MERN stack app connecting urban farmers and makers with local buyers. A group project that utilizes AWS-SDK and Semantic UI for React.",
                link: "https://meetyourmaker925.herokuapp.com/",
                code: "https://github.com/23carnies/MeetYourMakerCoupled"
            },
            {
                cardIdx: 2,
                img: "/images/dailyWod.png",
                alt: "Screenshot of wodWizard app",
                title: "wodWizard",
                description: "A full CRUD Express and NodeJS app for daily workouts and workout tracking utilizing Bootstrap for styling.",
                link: "https://wodwizard.herokuapp.com/",
                code: "https://github.com/23carnies/wodWizard"
            },
            {
                cardIdx: 3,
                img: "/images/rouletteWheelColorsFull.png",
                alt: "Screenshot of Psychedelic Roulette app",
                title: "Psychedelic Roulette",
                description: "A vibrant, digital update to the centuries old table game. Built using HTML, pure CSS, and vanilla Javascript.",
                link: "http://psychedelic-roulette.surge.sh/",
                code: "https://github.com/23carnies/psychedelicRoulette"
            },
            {
                cardIdx: 4,
                img: "https://picsum.photos/350",
                alt: "Placeholder photo",
                title: "Portfolio",
                description: "This portfolio is built in React and designed in pure CSS.",
                link: "#",
                code: "https://github.com/23carnies/klp-portfolio"
            },
        ],
    }

    // which card is selected
    // handleSelectCard = (cardNum) => {
    //     this.setState({ cardIdx: newIdx })
    // }

    // is selected card open true/false
    handleOpenCard = () => {
        this.setState({cardOpen: !this.state.cardOpen})
    }

    render() { 
        return ( 
            <>
                <div className="card-container">
                    {this.state.projects.map((project, idx) => 
                    <div className="card">
                        <img src={ project.img } alt={ project.alt } width="350"
                            
                             className={ this.state.cardOpen ? 'img-closed' : 'img-selected' }
                             onClick={ () => {this.handleOpenCard()} }>

                             </img>
                        
                        <div className={ this.state.cardOpen ? 'card-text-selected' : 'card-text' }
                             onClick={ () => {this.handleOpenCard()} }>
                            <h4>{ project.title }</h4>
                            <p>{ project.description }</p>
                            <div className="btn-box">
                                <a href={project.link} target="_blank"><button className="link">Open App</button></a>
                                <a href={project.code} target="_blank"><button className="code">See Code</button></a>
                            </div>
                        </div>

                    </div>
                    )}
                </div>
            </>
         );
    }
}
 
export default Projects;