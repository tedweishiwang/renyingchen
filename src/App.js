import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import NotFound from "./pages/NotFound";
import BookDesign from "./pages/BookDesign";
import Vr from "./pages/Vr";
import Homee from "./pages/Homee";

const App = () => {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Work />} exact />
          <Route path="/home" element={<Home />} exact />
          <Route path="/about" element={<About />} exact/>
          <Route path="/resume" element={<About />} exact/>
          <Route path="/work" element={<Work />} exact/>
          <Route path="/about" element={<About />} exact/>
          <Route path="/bookdesign" element={<BookDesign />} exact/>
          <Route path="/vr" element={<Vr />} exact/>
          <Route path="/homee" element={<Homee />} exact/>
          <Route element={<NotFound />} />
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;
