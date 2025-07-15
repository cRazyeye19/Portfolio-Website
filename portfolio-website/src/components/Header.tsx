import { navItems } from "../data/navData";

const Header = () => {
  return (
    <header className="py-8 flex justify-center items-center">
      <nav className="bg-white/70 backdrop-blur-sm px-6 py-2 rounded-lg shadow-sm">
        <ul className="flex space-x-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="text-md font-bold text-gray-800 no-underline"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
