import { Box } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppRoutes from "./Routes/Routes";
// import NavBar from "./components/NavBar"

function App() {
  return (
    <Box className="App">
      <BrowserRouter>
        {/* <NavBar /> */}
        <AppRoutes />
      </BrowserRouter>
    </Box>
  );
}

export default App;
