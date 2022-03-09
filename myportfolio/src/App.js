import "./App.css";
import Home from "./PortfolioContainer/Home/Home"
import About from "./PortfolioContainer/AboutMe/About";
import Resume from './PortfolioContainer/Resume/Resume';
import Testimonial from "./PortfolioContainer/Testimonial/Testimonial";
import Contact from "./PortfolioContainer/Contact/Contact";

function App() {
	return (
		<div className='App'>
			<Home/>
			<About/><br/><br/><br/>
			<Resume/>
		
			{/* <Testimonial/> */}
			{/* <Contact/> */}
		</div>
	);
}

export default App;
