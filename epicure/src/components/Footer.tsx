const logo = require("../images/about-logo.jpg");
const Footer = () => {
  return (
    <>
      <div>
        <h3>ABOUT US :</h3>
        <h5>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus
          vel justo fermentum bibendum non eu ipsum. Cras porta malesuada eros,
          eget blandit turpis suscipit at. Vestibulum sed massa in magna sodales
          porta. Vivamus elit urna, dignissim a vestibulum. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum
          bibendum no eu ipsum. Cras porta malesuada eros.
        </h5>
        <img src={logo} />
      </div>
      <span>
        <button>Contact us</button>
        <button>Terms Of Use</button>
        <button>Privacy Policy</button>
      </span>
    </>
  );
};
export default Footer;
