import { Box, styled } from "@mui/material";
import { getEpisodesById } from "../../service/apiService";
import { useEffect, useState } from "react";

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

const CardBox = styled(Box)(() => ({
  backgroundColor: "#3C3E44",
  color: "white",
  display: "flex",
  width: "30%",
  height: "220px",
  borderRadius: "10px",
  overflow: "hidden",
}));

const InfoBox = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "1rem",
}));

const AparicaoP = styled("p")(() => ({
  color: "#BEBEBE",
  marginTop: "0.5rem",
}));

export const CardPersonagem = ({ ...personagem }: PersonagemAPI) => {
  const [firstEpisode, setFirstEpisode] = useState("");
  const [lastEpisode, setLastEpisode] = useState("");

  useEffect(() => {
    const getFirstEpisode = async () => {
      const response = await getEpisodesById(
        personagem.episode[0].split("/").pop() || ""
      );
      setFirstEpisode(response.data.name);
    };

    const getLastEpisode = async () => {
      const response = await getEpisodesById(
        personagem.episode[personagem.episode.length - 1].split("/").pop() || ""
      );
      setLastEpisode(response.data.name);
    };

    getFirstEpisode();
    getLastEpisode();
  }, [personagem.episode]);

  return (
    <CardBox>
      <img src={personagem.image} alt="" />
      <InfoBox>
        <h3>{personagem.name}</h3>
        <p>{personagem.status}</p>
        <AparicaoP>Primeira aparição:</AparicaoP>
        <p>{firstEpisode}</p>
        <AparicaoP>Última aparição:</AparicaoP>
        <p>{lastEpisode}</p>
      </InfoBox>
    </CardBox>
  );
};
