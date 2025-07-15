import DesignerIllustration from "./DesignerIllustration";

const Hero = () => {
  return (
    <main className="text-center py-10 md:py-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
        Hi, I'm Soy.
      </h1>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight mt-2">
        I'm a Software Engineer
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mt-12 max-w-4xl mx-auto">
        <div className="bg-white/50 p-6 rounded-2xl shadow-sm text-left space-y-4">
          <a href="font-semibold block hover:text-purple-700">View my resume</a>
          <a href="font-semibold block hover:text-purple-700">
            Let's have a talk!
          </a>
          <div className="flex items-center space-x-2">
            <span className="font-semibold">Contact me:</span>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600 hover:text-purple-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </a>
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600 hover:text-purple-700"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0020 10c0-5.523-4.477-10-10-10z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>

        <DesignerIllustration />

        <div className="bg-white/50 p-6 rounded-2xl shadow-sm text-left">
          <p className="font-semibold text-gray-600">
            Simplifying complexity through clean, intuitive, and purposeful
            design.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
