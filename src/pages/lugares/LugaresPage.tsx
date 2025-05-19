import { useEffect, useState } from "react";
import { H1 } from "../../components/H1/H1";
import { getLocations } from "../../service/apiService";
import {
  CardLugares,
  type LugaresAPI,
} from "../../components/CardLugares/CardLugares";
import { Box, styled } from "@mui/material";
import { Center } from "../../components/Center/Center";

const LugaresBox = styled(Box)(() => {
  return {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    margin: "3rem auto",
    gap: "2rem",
  };
});

export const LugaresPage = () => {
  const [lugares, setLugares] = useState<LugaresAPI[]>([]);

  useEffect(() => {
    getLocations().then((response) => {
      setLugares(response.data.results);
    });
  }, []);

  return (
    <Center>
      <H1>Lugares Famosos de Rick and Morty</H1>
      <LugaresBox>
        {lugares.length > 0 &&
          lugares.map((lugar) => {
            return <CardLugares key={lugar.id} {...lugar} />;
          })}
      </LugaresBox>
    </Center>
  );
};
