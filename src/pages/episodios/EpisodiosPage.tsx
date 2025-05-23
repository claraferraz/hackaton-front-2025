import { useEffect, useState } from "react";
import { H1 } from "../../components/H1/H1";
import {
  CardEpisodios,
  type EpisodiosAPI,
} from "../../components/CardEpisodios/CardEpisodios";
import { MenuItem, Select } from "@mui/material";
import { Center } from "../../components/Center/Center";
import { getEpisodes } from "../../service/apiService";
import type { AxiosResponse } from "axios";

const getAllEpisodes = async () => {
  try {
    const response = await getEpisodes(1);

    const totalPages = response.data.info.pages;
    const episodes = response.data.results as EpisodiosAPI[];

    if (totalPages === 1) {
      return episodes;
    }

    const allRequests: Array<Promise<AxiosResponse>> = [];
    for (let i = 2; i <= totalPages; i++) {
      allRequests.push(getEpisodes(i));
    }
    const allResponses = await Promise.all(allRequests);

    const allEpisodes: EpisodiosAPI[] = allResponses.reduce(
      (listaDeEpisodios, response) => [
        ...listaDeEpisodios,
        ...response.data.results,
      ],
      episodes
    );

    return allEpisodes;
  } catch {
    throw new Error("Não foi possível carregar a quantidade de páginas");
  }
};

export const EpisodiosPage = () => {
  const [list, setList] = useState<EpisodiosAPI[]>([]);
  const [temporada, setTemporada] = useState<string>("Temporada 1");
  const temporadasList = [
    "Temporada 1",
    "Temporada 2",
    "Temporada 3",
    "Temporada 4",
    "Temporada 5",
  ];
  useEffect(() => {
    const setupEverything = async () => {
      const episodes = await getAllEpisodes();
      setList(episodes);
    };

    setupEverything();
  }, []);

  const episodiosFiltrados: EpisodiosAPI[] = list.filter(
    (episodio: EpisodiosAPI) => {
      if (temporada === "Temporada 1") {
        return episodio.episode.includes("S01");
      }
      if (temporada === "Temporada 2") {
        return episodio.episode.includes("S02");
      }
      if (temporada === "Temporada 3") {
        return episodio.episode.includes("S03");
      }
      if (temporada === "Temporada 4") {
        return episodio.episode.includes("S04");
      }
      if (temporada === "Temporada 5") {
        return episodio.episode.includes("S05");
      }
    }
  );

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
        {episodiosFiltrados &&
          episodiosFiltrados.map((episodio) => (
            <CardEpisodios key={episodio.id} {...episodio} />
          ))}
      </Center>
    </div>
  );
};
