import spicy from "../images/spicy-icon.png";
import vegan from "../images/vegan-icon.png";
import vegetarian from "../images/vegetarian.png";

const IconMeaning = () => {
  return (
    <>
      <header>THE MEANING OF OUR ICONS:</header>
      <img src={spicy} alt="spicy" />
      <img src={vegan} alt="vegan" />
      <img src={vegetarian} alt="vegetarian" />
    </>
  );
};
export default IconMeaning;
