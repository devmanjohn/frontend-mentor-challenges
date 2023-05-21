'use client';

// Imports
import { useEffect, useState } from 'react';

// Animation
import gsap from 'gsap';

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

  const animateElements = () => {
    const elements = document.querySelectorAll('*');

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.75,
        }
      );
    });
  };

  useEffect(() => {
    fetchProjects();
    animateElements();
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
