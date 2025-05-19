import { Box, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getPersonagemById } from "../../service/apiService";

export type LugaresAPI = {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
};

const CardBox = styled(Box)(() => {
  return {
    display: "flex",
    height: "150px",
    width: "80%",
    backgroundColor: "#EEEEEE",
    justifyContent: "space-between",
    boxShadow: "rgba(0, 0, 0, 0.2) 0px 6px 15px",
  };
});

const TextBox = styled(Box)(() => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "1rem",
  };
});

export const CardLugares = ({ ...lugares }: LugaresAPI) => {
  const [imagem, setImagem] = useState("");

  useEffect(() => {
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
