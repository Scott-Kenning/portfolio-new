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
            Played a key role in the transition from a code monolith to a microservices architecture. Created UI/UX prototypes for various pages of the application. Implemeneted a new service to allow processing of TAC weather data. Worked in a .NET environment with a React front-end.
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
          Implemented EditAI, an OpenAI powered copy editor for ebooks using AWS lambdas. Designed and developed several features and screens for a ground up rebuild of the Leanpub website using TailwindCSS and NextJS.
          </p>
        </div>
      ),
    },
    {
      title: "Sep - Dec 2022",
      content: (
        <div>
          <p className="font-bold pb-2">Testing Engineer - PolicyMe</p>
          <p className="text-base md:text-lg text-neutral-300 font-normal mb-8">
            Working with the business team, I designed and implemented an exhaustive test suite for a new product. I also implemented several test infrastructure upgrades such as improved website UI and test integration with Slack and Hubspot.
          </p>
        </div>
      ),
    },
    {
      title: "Jan - Apr 2022",
      content: (
        <div>
          <p className="font-bold pb-2">Full Stack Developer - Leanpub</p>
          <p className="text-base md:text-lg text-neutral-300 font-normal mb-8">
            Developed the &quot;Community Edition&quot; feature for Leanpub, allowing authors to give extended samples of their book in exchange for a reader&apos;s email address. I also implemented several bug fixes and improved the checkout flow, increasing sale conversions by 15%.
          </p>
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