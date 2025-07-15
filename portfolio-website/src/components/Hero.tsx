import DesignerIllustration from "./DesignerIllustration";
import { heroContent } from "../data/heroData";

const Hero = () => {
  return (
    <main className="text-center py-10 md:py-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
        {heroContent.headings[0]}
      </h1>
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 leading-tight mt-2">
        {heroContent.headings[1]}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mt-12 max-w-4xl mx-auto">
        <div className="flex flex-col space-y-4">
          {heroContent.buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className="bg-white/50 p-4 rounded-full shadow-sm text-center font-semibold hover:shadow-md transition-all"
            >
              {button.text}
            </a>
          ))}

          <div className="bg-white/50 p-4 rounded-full shadow-sm text-left font-semibold w-full flex justify-between items-center">
            <span>Contact me:</span>
            <div className="flex items-center space-x-3">
              {heroContent.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-600 hover:text-blue-700"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <DesignerIllustration />

        <div className="text-left">
          <p className="font-semibold text-gray-600">
            {heroContent.description}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Hero;
