import ProjectCard from '@/components/ProjectCard';

function Portfolio() {
  return (
    <main className='flex-grow'>
      {/* Project List */}
      <section className='custom-container grid gap-16'>
        <ProjectCard />
        <ProjectCard />
      </section>
    </main>
  );
}

export default Portfolio;
