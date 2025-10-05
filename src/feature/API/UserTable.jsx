import axios from "axios";

const BASE_URL = "http://localhost:5000/users";

export async function getTableData() {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
