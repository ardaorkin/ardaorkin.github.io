import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <NavBar />
      <About />
      <Blog />
      {/* <Projects /> */}
      <Contact />
    </div>
  );
}

export default App;
