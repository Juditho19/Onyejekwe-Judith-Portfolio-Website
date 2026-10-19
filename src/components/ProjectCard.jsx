import React from 'react';

const ProjectCard = ({ project }) => {
    const {
        title,
        category,
        image,
        description,
        technologies = [],
        outcomes = [],
        links = {}
    } = project;

    return (
        <article className="flex flex-col bg-surface border border-surface-border rounded-xl overflow-hidden shadow-lg hover:border-accent/40 transition-colors duration-300">
            <img src={image} alt={title} className="w-full h-48 object-cover " />
            {/* content */}
            <div className="p-6 flex flex-col text-left items-start">
                <p className="text-xs font-semibold tracking-wider text-accent mb-1">
                    {category}
                </p>
                <h3 className="text-xl font-bold mb-3 text-text-primary">{title}</h3>
                <p className="text-text-muted mb-5 text-sm leading-relaxed ">{description}</p>

                {/* technologies */}
                {technologies.length > 0 && (
                    // only render if there are actual technologies}
                   <ul
                        aria-label="Technologies used"
                        // hidden label for screen readers
                        className="flex flex-wrap gap-2 mb-5"
                   >
                        {technologies.map((tech) => (
                            <li key={tech} 
                            className="text-xs font-mono px-2.5 py-1 rounded-md bg-base border border-surface-border text-text-muted">
                                {tech}
                            </li>
                            
                        ))}
                    </ul>
                )}

                    

            </div>
               
        </article>
       
        
    );
};

export default ProjectCard;