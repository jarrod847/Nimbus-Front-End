import Axios from "axios";

const AxiosWithUrl = () => {
  return Axios.create({
    baseURL: process.env.REACT_APP_API_URL,
  });
};

export default AxiosWithUrl;
