import MainPage from "./main/MainPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<MainPage />
		</QueryClientProvider>
	);
}

export default App;
