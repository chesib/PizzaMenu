import { Link } from "react-router-dom";

const NotFound = () => {
	return (
		<main className="container not-found">
			<h2>Página no encontrada</h2>

			<Link to="/" className="go-back">
				Ir a Home
			</Link>
		</main>
	);
};

export default NotFound;
