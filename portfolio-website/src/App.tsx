import "./index.css";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <div className="bg-blue-50 min-h-screen text-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Header />
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
