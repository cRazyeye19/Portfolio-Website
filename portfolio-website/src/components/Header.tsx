import { navItems } from "../data/navData";

const Header = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="py-8 flex justify-center items-center">
      <nav className="bg-white/70 backdrop-blur-sm px-6 py-2 rounded-lg shadow-sm">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => scrollToSection(item.href.replace("#", ""))}
                className="text-md font-bold text-gray-800 cursor-pointer hover:text-blue-600 transition-colors"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
