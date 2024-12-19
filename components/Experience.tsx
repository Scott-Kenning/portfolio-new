import { Timeline } from "./ui/timeline"

export const data = [
    {
      title: "Sep - Dec 2024",
      content: (
        <div>
          <p className="font-bold pb-2 text-neutral-200">Junior Software Developer - James Evans & Associates</p>
          <p className="text-base md:text-lg text-neutral-300 font-normal mb-8">
            Working on a React and Spring Boot full stack web application, I implemented various bug fixes, minor features and upgrades to both the front and back end of the application. I also created several UI/UX prototypes for a redesign of the product website using shadcn 
          </p>
        </div>
      ),
    },
    {
      title: "Aug 2024",
      content: (
        <div>
          <p className="font-bold pb-2">Software Developer - Ruboss</p>
          <p className="text-base md:text-lg text-neutral-300 font-normal mb-8">
            Short term contract position integrating the Verus Blockchain user identity system into a clone of the BlueSky social media website
          </p>
        </div>
      ),
    },
    {
      title: "Jan - Apr 2024",
      content: (
        <div>
          <p className="font-bold pb-2">Software Developer - STR-SpeechTech LTD</p>
          <p className="text-base md:text-lg text-neutral-300 font-normal mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</p>
        </div>
      ),
    },
    {
      title: "May - Aug 2023",
      content: (
        <div>
          <p className="font-bold pb-2">Full Stack Developer - Leanpub</p>
          <p className="text-base md:text-lg text-neutral-300 font-normal mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.          </p>
        </div>
      ),
    },
    {
      title: "Sep - Dec 2022",
      content: (
        <div>
          <p className="font-bold pb-2">Testing Engineer - PolicyMe</p>
          <p className="text-base md:text-lg text-neutral-300 font-normal mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.          </p>
        </div>
      ),
    },
    {
      title: "Jan - Apr 2022",
      content: (
        <div>
          <p className="font-bold pb-2">Full Stack Developer - Leanpub</p>
          <p className="text-base md:text-lg text-neutral-300 font-normal mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.          </p>
        </div>
      ),
    },
  ];

const Experience = () => {
    return (
        <section className="min-h-screen max-w-6xl mx-auto py-16 -mt-16">
            <Timeline data={data}/>
        </section>
    )
}

export default Experience;