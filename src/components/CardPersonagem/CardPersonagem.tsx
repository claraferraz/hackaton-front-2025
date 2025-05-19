import { Box } from "@mui/material";

export type PersonagemAPI = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export const CardPersonagem = ({ ...personagem }: PersonagemAPI) => {
  return (
    <Box display={"flex"}>
      <img src={personagem.image} alt="" />
      <Box>
        <h3>{personagem.name}</h3>
        <p>{personagem.status}</p>
        <p>Primeira aparição:</p>
        <p>{personagem.episode[0]}</p>
        <p>Última aparição:</p>
        <p>{personagem.episode[personagem.episode.length - 1]}</p>
      </Box>
    </Box>
  );
};
