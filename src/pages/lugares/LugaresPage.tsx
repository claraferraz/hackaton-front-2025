import { useEffect, useState } from "react";
import { H1 } from "../../components/H1/H1";
import { getLocations } from "../../service/apiService";
import {
  CardLugares,
  type LugaresAPI,
} from "../../components/CardLugares/CardLugares";
import { Box, Button, styled } from "@mui/material";
import { Center } from "../../components/Center/Center";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

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
  const [page, setPage] = useState(1);
  const [pagesAmount, setPagesAmount] = useState(0);

  useEffect(() => {
    getLocations(page).then((response) => {
      setPagesAmount(response.data.info.pages);
      setLugares([...lugares, ...response.data.results]);
    });
    console.log(page);
  }, [page]);

  return (
    <Center>
      <H1>Lugares Famosos de Rick and Morty</H1>
      <LugaresBox>
        {lugares.length > 0 &&
          lugares.map((lugar) => {
            return <CardLugares key={lugar.id} {...lugar} />;
          })}
      </LugaresBox>
      {page < pagesAmount && (
        <Box marginBottom={"2rem"}>
          <Button
            variant="text"
            endIcon={<ArrowDropDownIcon />}
            onClick={() => setPage(page + 1)}
          >
            Mostrar Mais
          </Button>
        </Box>
      )}
    </Center>
  );
};
