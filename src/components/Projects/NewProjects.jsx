import React, { Component } from 'react'


const cardNum, btnNum = ['0', '1', '2', '3', '4']

class Projects extends Component {
    state = { 
        cardOpen: false,
        cardIdx: 0,
        projects: [
            {
                img: "/images/bilingueSquareLarge.png",
                alt: "Screenshot of bilingüe app",
                title: "bilingüe",
                description: "A full CRUD app built with Django and Python for maintaining Spanish language skills. Designed with pure CSS."
            },
            {
                img: "/images/MYMLogoNoBkgr.png",
                alt: "Screenshot of Meet Your Maker app",
                title: "Meet Your Maker",
                description: "A full CRUD MERN stack app connecting urban farmers and makers with local buyers. A group project that utilizes AWS-SDK and Semantic UI for React."
            },
            {
                img: "/images/dailyWod.png",
                alt: "Screenshot of wodWizard app",
                title: "wodWizard",
                description: "A full CRUD Express and NodeJS app for daily workouts and workout tracking utilizing Bootstrap for styling."
            },
            {
                img: "/images/rouletteWheelColorsFull.png",
                alt: "Screenshot of Psychedelic Roulette app",
                title: "Psychedelic Roulette",
                description: "A vibrant, digital update to the centuries old table game. Built using HTML, pure CSS, and vanilla Javascript."
            },
            {
                img: "https://picsum.photos/350",
                alt: "Placeholder photo",
                title: "Portfolio",
                description: "This portfolio is built in React and designed in pure CSS."
            },
        ],

        projectButtons: [
            {
                link: "https://bilingue-skills.herokuapp.com/",
                code: "https://github.com/23carnies/bilingue"
            },
            {
                link: "https://meetyourmaker925.herokuapp.com/",
                code: "https://github.com/23carnies/MeetYourMakerCoupled"
            },
            {
                link: "https://wodwizard.herokuapp.com/",
                code: "https://github.com/23carnies/wodWizard"
            },
            {
                link: "http://psychedelic-roulette.surge.sh/",
                code: "https://github.com/23carnies/psychedelicRoulette"
            },
            {
                link: "#",
                code: "https://github.com/23carnies/klp-portfolio"
            },
        ]
    }

    // which card is selected
    handleSelectCard = (cardNum) => {
        this.setState({ cardIdx: newIdx })
    }

    // is selected card open true/false
    handleOpenCard = () => {
        this.setState(prevState => ({
            cardOpen: !prevState.cardOpen
        }))
    }

    render() { 
        return ( 
            <>

            </>
         );
    }
}
 
export default Projects;