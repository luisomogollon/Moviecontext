import { Link, Outlet } from "react-router-dom";
import { GiBatMask } from "react-icons/gi";
export function Layout() {
  return (
    <main>
      <section className="w-full px-8 text-gray-700 bg-white">
        <div className="container flex flex-col flex-wrap items-center justify-center py-5 mx-auto md:flex-row max-w-7xl">
          <div className="relative flex flex-col md:flex-row">
            <button
              href="#_"
              className=" mr-1 flex items-center mb-5 font-medium text-gray-900 lg:w-auto lg:items-center lg:justify-center md:mb-0"
            >
              <span className="mx-auto text-xl font-black leading-none text-gray-900 select-none">
                Luiso<span className="text-purple-600">.</span>
              </span>
            </button>
            <nav className="flex flex-wrap items-center mb-5 text-base md:mb-0 md:pl-8 md:ml-8 md:border-l md:border-gray-200">
              <button
                href="#_"
                className="mr-4 font-medium leading-6 text-gray-600 hover:text-purple-700"
              >
                <Link to="/">Home</Link>{" "}
              </button>
              <button
                href="#_"
                className="mr-4 font-medium leading-6 text-gray-600 hover:text-purple-700"
              >
                {" "}
                <Link to="/Create">Create</Link>{" "}
              </button>
              <button
                href="#_"
                className="mr-2 font-medium leading-6 text-gray-600 hover:text-purple-700"
              >
                 <Link to="/About">About</Link>{" "}
              </button>
              <button
                href="#_"
                className="mr-1 font-medium leading-6 text-gray-600 hover:text-purple-700"
              ></button>
            </nav>
          </div>
          <div className="  px-5 text-end hover:text-indigo-700">
            <a href="https://www.linkedin.com/in/luis-michinaux/">
              {" "}
              <svg
                className="w-10 h-10"
                aria-hidden="true"
                fill="currentColor"
                viewBox=" 0 2 18 12"
              >
                {" "}
                <GiBatMask />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section>
        <Outlet />
      </section>

      <section className="text-gray-700 bg-white body-font">
        <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
          <button
            href="#_"
            className="text-xl font-black leading-none text-gray-900 select-none logo"
          >
            Luiso<span className="text-indigo-600">.</span>
          </button>
          <p className="mt-4 text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l sm:border-gray-200 sm:mt-0">
            © 2021 Tails - Page built with tailwind Css
          </p>
          <span className="inline-flex justify-center mt-1 space-x-6 sm:ml-auto sm:mt-0 sm:justify-start">
            <a
              href="https://github.com/luisomogollon/countries-hook.git"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"></path>
              </svg>
            </a>
          </span>
        </div>
      </section>
    </main>
  );
}
