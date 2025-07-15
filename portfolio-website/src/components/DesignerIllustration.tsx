import Avatar from "../assets/engineer.png";

const DesignerIllustration = () => {
  return (
    <>
      <div className="relative flex justify-center items-center my-8">
        <img src={Avatar} alt="Soy as a software engineer illustration" className="w-auto h-64 object-contain" loading="lazy" />
      </div>
    </>
  );
};

export default DesignerIllustration;
