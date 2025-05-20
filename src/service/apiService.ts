import axios from "axios";
type Payload = {
  name: string;
  status: string;
  gender: string;
};

const url = {
  characters: "https://rickandmortyapi.com/api/character",
  locations: "https://rickandmortyapi.com/api/location",
  episodes: "https://rickandmortyapi.com/api/episode",
};

export const getPersonagem = async ({ ...payload }: Payload) => {
  if (payload.status === "Status") {
    payload.status = "";
  }
  if (payload.gender === "Gender") {
    payload.gender = "";
  }
  return await axios.get(url.characters, {
    params: {
      name: payload.name,
      status: payload.status,
      gender: payload.gender,
    },
  });
};

export const getPersonagemById = async (id: string) => {
  return await axios.get(`${url.characters}/${id}`);
};

export const getLocations = async (page: number) => {
  return await axios.get(url.locations, {
    params: {
      page: page,
    },
  });
};

export const getEpisodes = async () => {
  return await axios.get(url.episodes);
};

export const getEpisodesById = async (id: string) => {
  return await axios.get(`${url.episodes}/${id}`);
};
