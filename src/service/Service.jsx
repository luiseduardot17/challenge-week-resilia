import axios from "axios";

const instance = axios.create({
  baseURL: "https://taberna-dragao.herokuapp.com",
});

export const getMenu = async () => {
  const response = await instance.get("/tabela");
  const json = await response.data.dados;
  return json;
};

// export const postProduto = async (body) => {
//   const response = await instance.post("/menu", body);
//   const json = await response.data.dados;
//   return json;
// };

// export const deleteProduto = async (produto) => {
//   const response = await instance.delete(`/menu/produto/${produto}`);
//   return response
// };

// export const editProduto = async (produto, body) => {
//   const response = await instance.put(`/menu/produto/${produto}`, body);
//   return response
// };