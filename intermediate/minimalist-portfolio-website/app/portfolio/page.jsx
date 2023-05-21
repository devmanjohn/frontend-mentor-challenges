import ProjectCard from '@/components/ProjectCard';

function Portfolio() {
  return (
    <main className='flex-grow'>
      {/* Project List */}
      <section className='custom-container custom-grid-layout'>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </section>
    </main>
  );
}

export default Portfolio;
