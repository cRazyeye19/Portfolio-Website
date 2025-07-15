import { lazy, Suspense } from "react";
import "./index.css";
import SkeletonLoader from "./components/SkeletonLoader";

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
          <Suspense fallback={<SkeletonLoader />}>
            <Header />
          </Suspense>
          <Suspense fallback={<SkeletonLoader />}>
            <Hero />
          </Suspense>
          <Suspense fallback={<SkeletonLoader />}>
            <About />
          </Suspense>
          <Suspense fallback={<SkeletonLoader />}>
            <Info />
          </Suspense>
          <Suspense fallback={<SkeletonLoader />}>
            <PortfolioGrid />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default App;
