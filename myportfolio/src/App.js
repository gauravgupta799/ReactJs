import "./App.css";
import Home from "./PortfolioContainer/Home/Home"
import About from "./PortfolioContainer/AboutMe/About";
import Skills from "./PortfolioContainer/Skills/Skills"
import Projects from "./PortfolioContainer/Projects/Project"
// import Resume from './PortfolioContainer/Resume/Resume';
import Contact from "./PortfolioContainer/Contact/Contact";
// import {BrowserRouter , Route,Routes} from "react-router-dom";


function App() {
	return (
		<>
			<Home/>
			<About/><br/><br/><br/>
			<Skills/>
			<Projects/>
			{/* <Resume/><br/><br/><br/> */}
		
			<Contact/>
			
		</>
	);
}

export default App;
