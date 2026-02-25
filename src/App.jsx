import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Blogs,
  BlogPost,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const HomePage = () => {
  return (
    <>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Blogs />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
};

const BlogPage = () => {
  return (
    <>
      <Navbar />
      <BlogPost />
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog/:slug" element={<BlogPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
