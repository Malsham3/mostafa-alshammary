import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WorksPage from "./pages/WorksPage";
import Foo from './components/Foo'
import ProjectRoutes from './components/Works/ProjectRoutes'

// add all the browser router stuff with links
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/works" component={WorksPage} />
      <ProjectRoutes/>
    </BrowserRouter>
  );
}

export default App;
