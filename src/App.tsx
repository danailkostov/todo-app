import { CssBaseline } from "@mui/material";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import MainContent from "./layout/MainContent/MainContent";

function App() {
  return (
    <>
      <CssBaseline />
      <Sidebar />
      <MainContent />
    </>
  );
}

export default App;
