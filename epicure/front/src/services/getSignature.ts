import axios from "axios";

const getSignature = async () => {
  const dishes = await axios.get(`http://localhost:8080/dishes/getSignature`);
  return dishes.data;
};
export default getSignature;
