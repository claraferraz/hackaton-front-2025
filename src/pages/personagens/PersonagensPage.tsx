import { Box, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { H1 } from "../../components/H1/H1";
import { useEffect, useState } from "react";
import { Center } from "../../components/Center/Center";
import { getPersonagem } from "../../service/apiService";
import {
  CardPersonagem,
  type PersonagemAPI,
} from "../../components/CardPersonagem/CardPersonagem";
import { Grid, styled } from "@mui/system";
import RickAndMortyImage from "../../assets/Rick-and-Morty-Shop-logo.png";

const ResultBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#24282F",
  color: "white",
  padding: "2rem",
  marginTop: "2rem",
}));

const ResultadoP = styled("p")(() => ({
  width: "100%",
  textAlign: "left",
  fontSize: "25px",
  paddingBottom: "2rem",
}));

export const PersonagensPage = () => {
  const [personagem, setPersonagem] = useState("");
  const statusOptions = ["Status", "Alive", "Dead", "Unknown"];
  const genderOptions = ["Gender", "Female", "Male", "Genderless", "Unknown"];
  const [status, setStatus] = useState<string>(statusOptions[0]);
  const [gender, setGender] = useState<string>(genderOptions[0]);
  const [listaPersonagens, setlistaPersonagens] = useState<PersonagemAPI[]>([]);

  useEffect(() => {
    if (personagem === "" && gender === "Gender" && status === "Status") {
      setlistaPersonagens([]);
    } else {
      getPersonagem({
        name: personagem,
        status: status,
        gender: gender,
      }).then((response) => {
        console.log(personagem, status, gender);
        setlistaPersonagens(response.data.results);
        console.log(response.data);
      });
    }
  }, [personagem, status, gender]);

  return (
    <div>
      <Center>
        <H1>Buscar Personagens</H1>
        <Box component="form" width={"496px"}>
          <TextField
            label="Buscar Personagens"
            id="outlined-size-normal"
            value={personagem}
            onChange={(e) => setPersonagem(e.target.value)}
            fullWidth
          />
          <Box display={"flex"} my={"2rem"} gap={"2rem"} width={"100%"}>
            <Box width={"100%"}>
              <InputLabel id="status">Status</InputLabel>
              <Select
                labelId="status"
                id="status-input"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                fullWidth
              >
                {statusOptions.map((option) => (
                  <MenuItem value={option}>{option}</MenuItem>
                ))}
              </Select>
            </Box>
            <Box width={"100%"}>
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                labelId="gender"
                id="gender-input"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                fullWidth
              >
                {genderOptions.map((option) => (
                  <MenuItem value={option}>{option}</MenuItem>
                ))}
              </Select>
            </Box>
          </Box>
        </Box>
      </Center>
      <Box>
        {listaPersonagens.length <= 0 ? (
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            width={"100%"}
            position={"fixed"}
            bottom={"1rem"}
          >
            <img src={RickAndMortyImage} alt="" />
            <p>©rickandmortyapi.com</p>
          </Box>
        ) : (
          <ResultBox>
            <ResultadoP>Resultados</ResultadoP>
            <Grid container spacing={4}>
              {listaPersonagens.map((personagem) => (
                <CardPersonagem key={personagem.id} {...personagem} />
              ))}
            </Grid>
          </ResultBox>
        )}
      </Box>
    </div>
  );
};
