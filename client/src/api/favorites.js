import { api } from "../config/default";
//search comments by recipe
const getFavorites = async () => {
  const response = await api.get(`/favorites/`);
  return response.data;
};

export default {
  getFavorites,
};
