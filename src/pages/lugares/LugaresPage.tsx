import { useEffect, useState } from "react";
import { H1 } from "../../components/H1/H1";
import { getLocations } from "../../service/apiService";
import {
  CardLugares,
  type LugaresAPI,
} from "../../components/CardLugares/CardLugares";

export const LugaresPage = () => {
  const [lugares, setLugares] = useState<LugaresAPI[]>([]);

  useEffect(() => {
    getLocations().then((response) => {
      setLugares(response.data.results);
    });
  }, []);

  return (
    <div>
      <H1>Lugares Famosos de Rick and Morty</H1>
      {lugares.length > 0 &&
        lugares.map((lugar) => <CardLugares key={lugar.id} {...lugar} />)}
    </div>
  );
};
