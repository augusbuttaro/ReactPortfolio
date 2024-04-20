import { useState } from 'react'
import ProjectModal from './ProjectModal'
import quizzicalImg from "../assets/quizzical-img.png"
import unitConverterImg from "../assets/unit-converter-img.png"
import movieWatchlistImg from "../assets/movie-watchlist-img.png"

function Projects() {
    const projectList = [
        {
            name: "Quizzical",
            img: quizzicalImg,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            link: "https://zippy-horse-8f801a.netlify.app/"
        },
        {
            name: "Unit Converter",
            img: unitConverterImg,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            link: "https://venerable-phoenix-d9f6b2.netlify.app/"
        },
        {
            name: "Movie Watchlist",
            img: movieWatchlistImg,
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            link: "https://rad-torrone-bc384f.netlify.app/"
        },
        
    ];
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (index) => {
        setSelectedProject(index === selectedProject ? null : index);
    };

    return (
    <div className='flex justify-center m-auto '>
        {projectList.map((project, index) =>{
            return(
                <div 
                    key={index}
                    className='p-12 h-60 w-72 rounded-xl hover:p-0 hover:shadow-green'
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
  )
}

export default Projects
