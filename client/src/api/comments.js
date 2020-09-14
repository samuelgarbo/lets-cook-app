import { api } from "../config/default";

//create comment
const createComment = async ({ recipe, comment, user }) => {
  const config = { contentType: "application-json" };
  const response = await api.post(
    "/comments",
    { recipe, comment, user },
    config
  );
  return response.data;
};
//search comments by recipe
const searchComments = async (label) => {
  const response = await api.get(`/comments/recipe/${label}`);
  return response.data;
};

export default {
  createComment,
  searchComments,
};
