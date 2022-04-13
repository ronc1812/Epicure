import dishes from "../Collections/dishData";
const getSignature = () => {
  const pictures = {
    pic1: dishes[0].picture,
    pic2: dishes[1].picture,
    pic3: dishes[2].picture,
  };
  return pictures;
};
export default getSignature;
