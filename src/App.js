import "./App.css";
import { SearchCity } from "./components/SearchCity/SearchCity.jsx";

function App() {
	return (
		<div className="App">
			{/* <h1 className="text-3xl font-bold underline">Hello world!</h1> */}
			<div className="mt-[10vh]">
				<SearchCity />
			</div>
		</div>
	);
}

export default App;
