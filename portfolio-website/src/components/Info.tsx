import { infoContent } from "../data/infoData";

const Info = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white p-6 sm:p-8 rounded-3xl shadow-sm mt-16 flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-center md:text-left">
      <div className="bg-gray-100 p-4 rounded-lg shadow-sm flex-shrink-0">
        <img
          src={infoContent.imageSrc}
          alt="Info Icon"
          className="size-20"
        />
      </div>
      <p className="text-gray-700 font-semibold">
        {infoContent.paragraph}
      </p>
    </section>
  );
};

export default Info;
