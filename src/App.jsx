import "./App.css";
import MainPage from "./components/mainPage";
import { ThemeProvider } from "./components/themeContext";





function App() {
  return (
    <>
      <ThemeProvider>
            <MainPage />
        </ThemeProvider>
    </>
  );
}

export default App;
