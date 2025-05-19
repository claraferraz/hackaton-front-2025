import { useEffect, useState } from "react";
import { H1 } from "../../components/H1/H1";
import { getEpisodes } from "../../service/apiService";
import {
  CardEpisodios,
  type EpisodiosAPI,
} from "../../components/CardEpisodios/CardEpisodios";

export const EpisodiosPage = () => {
  const [episodios, setEpisodios] = useState<EpisodiosAPI[]>([]);

  useEffect(() => {
    getEpisodes().then((response) => {
      setEpisodios(response.data.results);
    });
  }, []);

  return (
    <div>
      <H1>Episodios</H1>
      {episodios.length > 0 &&
        episodios.map((episodio) => (
          <CardEpisodios key={episodio.id} {...episodio} />
        ))}
    </div>
  );
};
