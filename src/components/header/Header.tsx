import { AppBar, Toolbar, Button, Box } from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "./../../assets/Rick-And-Morty-Logo.png";

const Header = () => {
  const navigate = useNavigate();
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#1C1C1C", color: "#12B0C9" }}
    >
      <Toolbar
        sx={{ justifyContent: "space-between", width: "80%", margin: "0 auto" }}
      >
        <Box
          component={RouterLink}
          to="/"
          sx={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={logo}
            alt="Rick and Morty Logo"
            style={{ width: "194px" }}
          />
        </Box>

        <Box sx={{ display: "flex", gap: "120px" }}>
          <Button color="inherit" onClick={() => navigate("/personagens")}>
            Personagens
          </Button>
          <Button color="inherit" onClick={() => navigate("/lugares")}>
            Lugares Famosos
          </Button>
          <Button color="inherit" onClick={() => navigate("/episodios")}>
            Episódios
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
