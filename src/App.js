import AppRouter from "./AppRouter";
import { PrimeReactProvider } from "primereact/api";
import 'primereact/resources/themes/lara-dark-teal/theme.css';


export default function App() {

	return (
		<PrimeReactProvider>
			<AppRouter />
		</PrimeReactProvider>
	);
}