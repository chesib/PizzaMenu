import { BrowserRouter } from "react-router-dom";
import GlobalProvider from "./context/GlobalContext";
import "./App.css";
import Router from "./router/Router";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	return (
		<main>
			<ToastContainer position="top-center" autoClose={1000} />
			<GlobalProvider>
				<BrowserRouter>
					<Navbar />
					<Router />
					<Footer />
				</BrowserRouter>
			</GlobalProvider>
		</main>
	);
}

export default App;
