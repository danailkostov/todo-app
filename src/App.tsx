import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Sidebar from "./layout/Sidebar/Sidebar";
import MainContent from "./layout/MainContent/MainContent";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: "300px",
          backgroundColor: "#262626",
          borderRight: "none",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Sidebar />
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
