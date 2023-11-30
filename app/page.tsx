import ProjectCard from "./components/ProjectCard";
import './mainpage.css'

const projects = [
  {
    link: '/projects/collisionszero',
    title: 'Collisions Zero',
    description: 'A service that allows people to report dangerous driving behaviours via IVR',
    date: '2023',
    technologies: ['AWS', 'Firebase', 'NodeJS', 'React', 'Twilio IVR']
  },
  {
    link: '/projects/offermulty',
    title: 'OfferMulty',
    description: 'A job offer accelerator that helps people land their dream job faster',
    date: '2023',
    technologies: ['Wordpress', 'WooCommerce']
  },
  {
    link: '/projects/droowa',
    title: 'droowa',
    description: 'droowa aims to make video based remote meetings and social events as natural as possible',
    date: '2022',
    technologies: ['React', 'NodeJS', 'Firebase', 'WebRTC']
  },
  {
    link: '/projects/scrumpoker',
    title: 'Scrum Poker',
    description: 'A tool that allows team to estimate complexity or time it may take to complete a task in sprint planning',
    date: '2021',
    technologies: ['React', 'NodeJS', 'WebSocket']
  },
  {
    link: '/projects/reachtheportal',
    title: 'Reach the Portal',
    description: 'An iOS puzzle game',
    date: '2016',
    technologies: ['Swift', 'Xcode']
  },
  {
    link: '/projects/reachtheportal',
    title: 'Easter Egg Design',
    description: 'An Android app for designing easter eggs!',
    date: '2015',
    technologies: ['Java', 'Android Studio']
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
