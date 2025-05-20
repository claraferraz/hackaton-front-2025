import { useEffect, useState } from "react";
import { CardBox, TextBox } from "../CardBox/CardBox";
import { H1 } from "../H1/H1";
import ImageNotFound from "../../assets/image-not-found.jpeg";
import { getPersonagemById } from "../../service/apiService";

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
  const [imagem, setImagem] = useState<string | undefined>();

  useEffect(() => {
    if (episodios.characters[0] === undefined) {
      setImagem(ImageNotFound);
    }
    const randomIndex = Math.floor(Math.random() * episodios.characters.length);
    const getImagem = async () => {
      const response = await getPersonagemById(
        episodios.characters[randomIndex].split("/").pop() || ""
      );
      setImagem(response.data.image);
    };

    getImagem();
  }, [episodios.characters]);

  return (
    <CardBox width="60%">
      <TextBox>
        <H1>{episodios.id}</H1>
        <h4>{episodios.name}</h4>
        <p>Lançamento {episodios.air_date}</p>
      </TextBox>
      <img src={imagem} alt="" />
    </CardBox>
  );
};
