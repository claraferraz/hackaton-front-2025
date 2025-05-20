import { useEffect, useState } from "react";
import { H1 } from "../../components/H1/H1";
import { getEpisodes } from "../../service/apiService";
import {
  CardEpisodios,
  type EpisodiosAPI,
} from "../../components/CardEpisodios/CardEpisodios";
import { MenuItem, Select } from "@mui/material";
import { Center } from "../../components/Center/Center";

export const EpisodiosPage = () => {
  const [temporada, setTemporada] = useState<string>("Temporada 1");
  const [episodios, setEpisodios] = useState<EpisodiosAPI[]>([]);
  const temporadasList = [
    "Temporada 1",
    "Temporada 2",
    "Temporada 3",
    "Temporada 4",
    "Temporada 5",
  ];

  useEffect(() => {
    getEpisodes(1).then((response) => {
      setEpisodios(response.data.results);
    });
  }, []);

  return (
    <div>
      <Center>
        <H1>Episodios</H1>
        <Select
          value={temporada}
          sx={{
            width: "10rem",
            color: "#12B0C9",
            backgroundColor: "#EEEEEE",
            border: "1px solid #EEEEEE",
          }}
          onChange={(e) => setTemporada(e.target.value)}
        >
          {temporadasList.map((option) => (
            <MenuItem value={option}>{option}</MenuItem>
          ))}
        </Select>
        {episodios.length > 0 &&
          episodios.map((episodio) => (
            <CardEpisodios key={episodio.id} {...episodio} />
          ))}
      </Center>
    </div>
  );
};
