import { useState } from 'react'
import ProjectModal from './ProjectModal'
import quizzicalImg from "../assets/quizzical-img.png"
import unitConverterImg from "../assets/unit-converter-img.png"
import sogenImg from "../assets/sogen-img.png"
import movieWatchlistImg from "../assets/movie-watchlist-img.png"
import rpsImg from "../assets/rps-img.png"
import recipesWikiImg from "../assets/recipes-wiki-img.png"

function Projects() {
    const projectList = [
        {
            name: "Sogen E-Commerce",
            img: sogenImg,
            description: "Sogen E-Commerce serves as a fake E-Commerce app using mainly React and APIs as well as React Router. Focusing on trying to give the best user experience for people shopping online and a design created with Figma, this page is an attempt to unveil advanced React understanding.",
            link: "https://sogen-ecommerce-augusto-buttaro.netlify.app/"
        },
        {
            name: "Rock, Paper, Scissors",
            img: rpsImg,
            description: "Rock, Paper, Scissors was created using JavaScript, HTML, and CSS. It offers a user-friendly experience for playing the classic game, while also displaying basic JavaScript concepts.",
            link: "https://rock-paper-scissors-augusto-buttaro.netlify.app/"
        },
        {
            name: "Recipes Wiki",
            img: recipesWikiImg,
            description: "Recipes Wiki is a culinary hub crafted with HTML, Tailwind CSS, React and using an API. It's designed to be a catalog of recipes from all over the world providing also the possibility to save favorite meals in a separate page using a Firebase Database, and a showcase for React and APIs skills",
            link: "https://recipes-wiki-augusto-buttaro.netlify.app/"
        },
        {
            name: "Quizzical",
            img: quizzicalImg,
            description: "Quizzical is a fun quiz game created with HTML, React and CSS with the main objective of demonstrating the understanding of React basics. This page retrieves questions and answers from a quiz API and shows a series of questions for the user to select to then display correct and incorrect answers and a score.",
            link: "https://quizzical-augusto-buttaro.netlify.app/"
        },
        {
            name: "Movie Watchlist",
            img: movieWatchlistImg,
            description: "Movie Watchlist is a web application built with HTML, CSS, JavaScript, and the OMDB API. It serves as a tool for movie enthusiasts to discover, explore, and keep track of their favorite films. Users can search for movies, view detailed information and add them to their personal watchlists for future reference.",
            link: "https://movie-watchlist-augusto-buttaro.netlify.app/"
        },
        {
            name: "Unit Converter",
            img: unitConverterImg,
            description: "Unit Converter is a simple tool that provides users with a convenient way to convert between different units of measurement across various categories such as length, weight, temperature, and more. Developed using HTML, CSS, and JavaScript, shows knowledge of JavaScript fundamentals.",
            link: "https://unit-converter-augusto-buttaro.netlify.app/"
        },
        
        
    ];
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (index) => {
        setSelectedProject(index === selectedProject ? null : index);
    };

    return (
        <div className='my-16'>
            <h2 className='text-center text-4xl mb-4 text-green font-bold'>Projects</h2>
            <div className='grid grid-cols-3 w-[75%] m-auto '>
                {projectList.map((project, index) =>{
                    return(
                        <div 
                            key={index}
                            className='p-8 h-60 m-auto w-80 rounded-xl hover:p-0 hover:shadow-green'
                            onClick={() => handleProjectClick(index)}
                        >
                            <div className='bg-pink-seventy flex flex-col justify-between w-[100%] h-[100%] p-2
                                rounded-xl cursor-pointer'>
                                <img className='object-cover h-5/6 rounded-xl' src={project.img} />
                                <h1 className='text-green text-2xl text-center'>{project.name}</h1>
                            </div>
                            {selectedProject === index && (
                                <ProjectModal project={project} onClose={() => setSelectedProject(null)} />
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
  )
}

export default Projects
