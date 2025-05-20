import { useEffect, useState } from "react";
import { H1 } from "../../components/H1/H1";
import { getEpisodes } from "../../service/apiService";
import {
  CardEpisodios,
  type EpisodiosAPI,
} from "../../components/CardEpisodios/CardEpisodios";
import { MenuItem, Select } from "@mui/material";

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
    getEpisodes().then((response) => {
      setEpisodios(response.data.results);
    });
  }, []);

  return (
    <div>
      <H1>Episodios</H1>
      <Select
        value={temporada}
        onChange={(e) => setTemporada(e.target.value)}
        fullWidth
      >
        {temporadasList.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
      {episodios.length > 0 &&
        episodios.map((episodio) => (
          <CardEpisodios key={episodio.id} {...episodio} />
        ))}
    </div>
  );
};
