import { aboutContent } from "../data/aboutData";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto bg-white p-4 sm:p-6 rounded-3xl shadow-sm my-12 text-center">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">{aboutContent.title}</h2>
      <p className="text-center text-gray-600 leading-relaxed">
        {aboutContent.paragraph}
      </p>
    </section>
  );
};

export default About;
