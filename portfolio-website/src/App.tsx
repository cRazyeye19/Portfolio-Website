import { lazy, Suspense } from "react";
import "./index.css";
import HeaderSkeleton from "./components/HeaderSkeleton";
import HeroSkeleton from "./components/HeroSkeleton";
import AboutSkeleton from "./components/AboutSkeleton";
import InfoSkeleton from "./components/InfoSkeleton";
import PortfolioGridSkeleton from "./components/PortfolioGridSkeleton";

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
          <Suspense fallback={<HeaderSkeleton />}>
            <Header />
          </Suspense>
          <Suspense fallback={<HeroSkeleton />}>
            <Hero />
          </Suspense>
          <Suspense fallback={<AboutSkeleton />}>
            <About />
          </Suspense>
          <Suspense fallback={<InfoSkeleton />}>
            <Info />
          </Suspense>
          <Suspense fallback={<PortfolioGridSkeleton />}>
            <PortfolioGrid />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
