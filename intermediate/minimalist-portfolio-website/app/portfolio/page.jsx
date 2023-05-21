'use client';

import { useEffect, useState } from 'react';

// Components
import ProjectCard from '@/components/ProjectCard';

function Portfolio() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const res = await fetch(
      'https://my-json-server.typicode.com/devmanjohn/portfolio-projects-data/db'
    );
    const data = await res.json();

    setProjects(data.projects);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <main className='flex-grow'>
      {/* Project List */}
      <section className='custom-container custom-grid-layout'>
        {projects &&
          projects.map((project, index) => {
            return (
              <ProjectCard
                key={index}
                id={project.id}
                title={project.title}
                cover={project.cover}
                details={project.shortDescription}
              />
            );
          })}
      </section>
    </main>
  );
}

export default Portfolio;
