import Image from "next/image";
import { FaGithub, FaLinkedin} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen lg:min-h-[1px] h-[90vh] bg-dots flex items-center justify-center"
    >
      <div className="grid lg:grid-cols-3 max-w-5xl mx-auto md:pt-[10vh] justify-items-end">
        <div className="flex flex-col col-span-2 max-w-5xl gap-y-2">
          <p className="text-3xl md:text-4xl font-bold">Hi, I&apos;m Scott Kenning</p>
          <h1
            className="text-4xl md:text-6xl font-bold pb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500"
          >
            Full Stack<br/>Software Engineer
          </h1>
          <Image
            src="/man-developing-website-on-desk.svg"
            width={400}
            height={400}
            alt="developer icon"
            className="block lg:hidden max-w-[200px] md:max-w-[300px] mx-auto"
          />
          <div className="mx-auto mt-0">
            <div className="space-y-4 md:text-xl text-gray-300">
              <p className="line-height-1.2">
                I specialize in
                front-end development using <strong>React</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>.
              </p>
            </div>
          </div>
          <div className="flex gap-x-4 my-4">
             <a 
                href="/resume.pdf"
                target="_blank"
                title="Resume"
                className="p-[2px] relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                <div className="px-4 md:px-8 py-2  bg-black rounded-lg relative group transition duration-200 text-white hover:bg-transparent hover:text-black font-semibold">
                  View Resume
                </div>
            </a>
            <a
              href="https://www.linkedin.com/in/scott-kenning/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-10 h-10" />
            </a>
            <a
              href="https://github.com/scott-kenning"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-10 h-10" />
            </a>
            <a
              href="mailto:skenning128@gmail.com"
              title="Email: skenning128@gmail.com"
            >
              <MdEmail className="w-10 h-10" />
            </a>
          </div>
        </div>
        
        <Image
          src="/man-developing-website-on-desk.svg"
          width={400}
          height={400}
          alt="developer icon"
          className="hidden lg:block max-w-[400px]"
        />
      </div>
      {/* <FaArrowDown className="absolute left-1/2 bottom-10 h-8 w-8 text-purple-500 opacity-50"/> */}
    </section>
  );
};

export default About;
