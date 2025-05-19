import { H1 } from "../H1/H1";

export type EpisodiosAPI = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
};

export const CardEpisodios = ({ ...episodios }: EpisodiosAPI) => {
  return (
    <div>
      <H1>{episodios.id}</H1>
      <h4>{episodios.name}</h4>
      <p>Lançamento {episodios.air_date}</p>
    </div>
  );
};
