import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage";
import ContactPage from './pages/ContactPage'

// add all the browser router stuff with links
function App() {
  return (

<BrowserRouter>
<Route exact path="/" component={HomePage} />
<Route exact path="/contactme" component={ContactPage} />
{/* <Route exact path="/works" component={Work} /> */}
</BrowserRouter> 

  );
}

export default App;
