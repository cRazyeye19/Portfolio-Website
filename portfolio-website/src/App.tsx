import { lazy, Suspense } from "react";
import "./index.css";

const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./components/About"));
const Info = lazy(() => import("./components/Info"));
const PortfolioGrid = lazy(() => import("./components/PortfolioGrid"));

function App() {
  return (
    <>
      <div className="bg-blue-50 min-h-screen text-gray-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div>Loading Header...</div>}>
            <Header />
          </Suspense>
          <Suspense fallback={<div>Loading Hero...</div>}>
            <Hero />
          </Suspense>
          <Suspense fallback={<div>Loading About...</div>}>
            <About />
          </Suspense>
          <Suspense fallback={<div>Loading Info...</div>}>
            <Info />
          </Suspense>
          <Suspense fallback={<div>Loading Portfolio...</div>}>
            <PortfolioGrid />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
