import axios from "axios";

const activeResource = async (req, res) => {
  const axiosRes = await axios.get(`${process.env.API_URL}/activeResource`);
  const resource = axiosRes.data;

  return res.send(resource);
}

export default activeResource;