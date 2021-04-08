import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import WorksPage from "./pages/WorksPage";
import ProjectOne from "./components/Works/ProjectOne"
import Foo from './components/Foo'
import Routes from './components/Works/Routes'

// add all the browser router stuff with links
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/works" component={WorksPage} />

      {/* <Route exact path= "/works/1" component={ProjectOne} /> */}
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
