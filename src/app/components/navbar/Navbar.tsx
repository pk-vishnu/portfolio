"use client";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-200 body-font z-10 font-poppins">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a
            className="flex title-font font-medium items-center text-gray-100 mb-4 md:mb-0"
            href="/"
          >
            <span className="ml-3 text-xl text-gray-100">Vishnu P K</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-400" href="/tech">
              Technical
            </a>
            <a className="mr-5 hover:text-gray-400" href="/nontech">
              Non-Technical
            </a>
          </nav>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
          >
            Resume
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
