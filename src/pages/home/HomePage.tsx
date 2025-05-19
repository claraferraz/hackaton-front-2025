import { useNavigate } from "react-router-dom";
import HomeImage from "../../assets/home-image.png";
import { Button, styled } from "@mui/material";
import { H1 } from "../../components/H1/H1";
import { Center } from "../../components/Center/Center";

const HomeButton = styled(Button)(() => ({
  backgroundColor: "#12B0C9",
  color: "#fff",
  "&:hover": {
    backgroundColor: "#12B0C9",
  },
}));

const Home = () => {
  const navigate = useNavigate();

  return (
    <Center>
      <H1>Está preparado para navegar no mundo de Rick and Morty?</H1>
      <img src={HomeImage} alt="" />
      <HomeButton
        variant="contained"
        disableElevation
        onClick={() => navigate("/personagens")}
      >
        Iniciar Aventura
      </HomeButton>
      <p>@rickandmortyapi.com</p>
    </Center>
  );
};

export default Home;
