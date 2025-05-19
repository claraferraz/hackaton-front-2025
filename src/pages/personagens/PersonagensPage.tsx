import { Box, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { H1 } from "../../components/H1/H1";
import { useState } from "react";
import { Center } from "../../components/Center/Center";

export const PersonagensPage = () => {
  const [personagem, setPersonagem] = useState("");
  const [status, setStatus] = useState("");
  const [gender, setGender] = useState("");
  const statusOptions = ["alive", "dead", "unknown"];
  const genderOptions = ["female", "male", "genderless", "unknown"];

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
    </div>
  );
};
