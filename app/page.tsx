import ProjectCard from "./components/ProjectCard";
import './mainpage.css'

const projects = [
  {
    link: '/projects/collisionszero',
    title: 'Collisions Zero',
    description: 'A service that allows people to report dangerous driving behaviours via IVR',
    date: '2023',
  },
  {
    link: '/projects/scrumpoker',
    title: 'Scrum Poker',
    description: 'A tool that allows team to estimate complexity or time it may take to complete a task during sprint planning',
    date: '2022',
  },
]

export default function Page() {
  return (
    <section className='main_page'>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">Yuan Ji</h1>
      <p className="prose-neutral dark:prose-invert project_container">
        {
          projects.map(project => {
            return (
              <ProjectCard
                key={project.link}
                {...project}
              />
            )
          })
        }
      </p>
    </section>
  );
}
