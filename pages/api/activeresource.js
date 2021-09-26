import axios from "axios";

const activeResource = async (req, res) => {
  const axiosRes = await axios.get("http://localhost:3001/api/activeResource");
  const resource = axiosRes.data;

  return res.send(resource);
}

export default activeResource;