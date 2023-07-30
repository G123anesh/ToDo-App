import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppHeader from "./components/AppHeader/AppHeader";
import AppFooter from "./components/AppFooter/AppFooter";
import Home from "./pages/Home";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <Home />
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
