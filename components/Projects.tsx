import Image from "next/image";

  const cards = [
    {
      title: "StudySpaceFinder",
      description: "A resource for UVic students to find empty classrooms on campus. I was the team lead on this project, and it was organized through Uvic's programming club VikeLabs.",
      url: "https://studyspace.vikelabs.ca",
      githubUrl: "https://github.com/VikeLabs/StudySpaceFinder",
      imagePath: "/studyspacefinder.png"
    },
    {
      title: "Portfolio v1",
      description: "A previous iteration of my portfolio. It's outdated now, but the design was original and all effects were done without the use of any animation libraries.",
      url: "https://scottkenningv0.vercel.app",
      githubUrl: "https://github.com/scott-kenning/portfolio",
      imagePath: "/portfolio.png"
    },
    {
      title: "Brain Tumour Identifier",
      description: "A machine learning model that can identify brain tumors in MRI scans. This project won 1st place in programming at the Canadian Engineering Competition. Note that this may not work on the first image as the back end will need time to spin up.",
      url: "https://cec-2025.vercel.app",
      githubUrl: "https://github.com/scott-kenning/zoomlight",
      imagePath: "/brainscanner.png"
    },
    {
      title: "Advent of Code",
      description: "Advent of Code is an annual programming challenge that takes place in December. I created this website to showcase my solutions to the problems I completed.",
      url: "https://aoc2024solutions.vercel.app",
      githubUrl: "https://github.com/scott-kenning/cec-2025",
      imagePath: "/aoc.png"
    },
  ]

  interface CardType {
    title: string,
    description: string,
    url: string,
    githubUrl: string,
    imagePath: string,
  }

  const Card = ({title, description, url, githubUrl, imagePath}: CardType ) => {
    return (
      <div className="w-full p-8 rounded-xl border border-neutral-900 flex flex-col gap-y-2 hover:shadow shadow-white">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-neutral-400">{description}</p>
        <a href={url} target="_blank">
          <Image className="aspect-video rounded-lg opacity-80 hover:opacity-100 transition duration-300" src={imagePath} width={1920} height={1080} alt={title}></Image>
        </a>
        <div className="mt-4 text-sm flex items-center">
          <a className="bg-white rounded-lg text-black px-3 py-2 font-semibold" href={url} target="_blank">Demo</a>
          <a className="ml-4" href={githubUrl} target="_blank">Github ⭢</a>
        </div>
      </div>
    )
  }


  const Projects = () => {
    return (
        <section className="min-h-screen max-w-5xl w-full flex flex-col items-center mx-auto">
            <h2 className="text-4xl font-bold mt-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 pb-4">Projects</h2>
            <div className="grid md:grid-cols-2 w-full gap-8 mt-8">
              {cards.map(card => {
                return <Card key={card.title} {...card}/>
              })}
            </div>
        </section>
    )
  }

  export default Projects;