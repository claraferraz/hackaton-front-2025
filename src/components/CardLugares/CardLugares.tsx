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
  return (
    <div>
      <h4>{lugares.name}</h4>
      <p>Dimensão: {lugares.dimension}</p>
    </div>
  );
};
