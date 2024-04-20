import { useState, useEffect } from 'react';

function ProjectModal({ project, onClose }) {

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div className="bg-pink p-8 w-[70%] flex flex-col justify-center relative rounded-lg modal-content" onClick={(e) => e.stopPropagation()}>
                <h1 className="text-3xl text- font-bold mx-auto mb-4">{project.name}</h1>
                <img src={project.img} alt={project.name} className="mb-4 rounded-lg mx-auto w-[50%]" />
                <p className="text-gray-800 text-center">{project.description}</p>
                <a href={project.link} target='_blank' className="text-blue-500 px-8 py-2 rounded-lg mx-auto my-8 text-xl bg-green hover:underline">View Project</a>
                <button onClick={onClose} className="absolute top-0 right-0 m-4 text-green font-bold text-4xl cursor-pointer hover:text-gray-800 focus:outline-none">X</button>
            </div>
        </div>
    );
}

export default ProjectModal;