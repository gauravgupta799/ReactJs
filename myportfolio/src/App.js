import "./App.css";
import Home from "./PortfolioContainer/Home/Home"
import About from "./PortfolioContainer/AboutMe/About";
import Skills from "./PortfolioContainer/Skills/Skills"
import Projects from "./PortfolioContainer/Projects/Project"
import Footer from "./PortfolioContainer/Footer/Footer";
import Contact from "./PortfolioContainer/Contact/Contact";
// import {BrowserRouter , Route,Routes} from "react-router-dom";


function App() {
	return (
		<>
		{/* <Route path = "/home" component={Home}/> */}
			<Home/>
			<About/>
			<Skills/>
		
			<Projects/>
	
			<Contact/>
			<Footer/>

			
			
		</>
	);
}

export default App;
