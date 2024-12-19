import Link from "next/link";

const Nav = () => {
    return (
      <header className="w-screen absolute lg:fixed h-16 top-0 left-0 bg-black flex items-center border-b border-white/10 z-50 p-4 lg:p-0">
        <div className="h-100 w-full mx-auto max-w-5xl flex justify-between items-center">
          <Link
            href="/#hero"
            className="font-mono text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500"
          >  
            &lt;sk/&gt;
          </Link>
          <div className="flex gap-x-4 font-semibold">
            <Link className="text-neutral-300" href="/#experience">Experience</Link>
            <Link className="text-neutral-300" href="/#projects">Projects</Link>
            <Link className="text-neutral-300" href="/#contact">Contact</Link>
            <Link className="text-neutral-300" href="/blog">Blog</Link>
          </div>
        </div>
      </header>
    )
}

export default Nav;