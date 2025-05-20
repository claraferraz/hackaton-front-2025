import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getPersonagemById } from "../../service/apiService";
import { CardBox, TextBox } from "../CardBox/CardBox";
import ImageNotFound from "../../assets/image-not-found.jpeg";

export type LugaresAPI = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

export const CardLugares = ({ ...lugares }: LugaresAPI) => {
  const [imagem, setImagem] = useState<string | undefined>();

  useEffect(() => {
    if (lugares.residents[0] === undefined) {
      setImagem(ImageNotFound);
    }
    const getImagem = async () => {
      const response = await getPersonagemById(
        lugares.residents[0].split("/").pop() || ""
      );
      setImagem(response.data.image);
    };

    getImagem();
  }, [lugares.residents]);

  return (
    <CardBox>
      <TextBox>
        <Typography gutterBottom variant="h5" component="div">
          {lugares.name}
        </Typography>
        <Typography variant="body1">{lugares.dimension}</Typography>
      </TextBox>
      <img src={imagem} alt="" />
    </CardBox>
  );
};
