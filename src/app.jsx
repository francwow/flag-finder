import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import DarkMode from "./DarkMode";
import Header from "./Header";
import Search from "./Search";
import Details from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <div className="app-wrapper">
          <Link to="/">
            <Header />
          </Link>
          <DarkMode />
          <Routes>
            <Route path="/details/:name" element={<Details />} />
            <Route path="/" element={<Search />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const body = document.body;
body.classList.add("lightMode");
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
