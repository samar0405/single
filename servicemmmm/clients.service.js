import http from "@/api/interseptors";

export const getData = async (params) => {
  try {
    const response = await http.get("client/all", { params });
  } catch (error) {
    console.log(error);
  }
};
