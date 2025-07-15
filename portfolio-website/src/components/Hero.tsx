import DesignerIllustration from "./DesignerIllustration";
import { heroContent } from "../data/heroData";

const Hero = () => {
  const handleButtonClick = (buttonType?: string) => {
    if (buttonType === "calendly") {
      window.Calendly.initPopupWidget({
        url: "https://calendly.com/jlesterpansoy",
      });
    }
  };

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
              href={button.type === "calendly" ? "#" : button.href}
              onClick={(e) => {
                if (button.type === "calendly") {
                  e.preventDefault();
                }
                handleButtonClick(button.type);
              }}
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
                  title={link.title}
                  className="text-gray-600 hover:text-blue-700"
                  target="_blank"
                  rel="noopener noreferrer"
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
