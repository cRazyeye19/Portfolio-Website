import { aboutContent } from "../data/aboutData";

const About = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-2xl shadow-sm my-12 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{aboutContent.title}</h2>
      <p className="text-gray-600 leading-relaxed">
        {aboutContent.paragraph}
      </p>
    </section>
  );
};

export default About;
