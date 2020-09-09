import axios from "axios";

async function getApidata(uuid) {
  let URL = uuid
    ? `https://surf-shop-backend.herokuapp.com/api/v1/${uuid}`
    : "https://surf-shop-backend.herokuapp.com/api/v1";
  try {
    const res = await axios.get(URL);
    const data = res.data;
    return data;
  } catch (error) {
    throw new Error();
  }
}

export default getApidata;
