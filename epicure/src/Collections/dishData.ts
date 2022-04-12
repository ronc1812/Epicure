import padKi from "../images/pad-ki-mao.jpg";
import redFarm from "../images/red-farm.jpg";
import taLaMaKo from "../images/ta-la-ma-ko.jpg";
const dishes = [
  {
    name: "pad ki mao",
    id: 1,
    ingredients: [],
    picture: padKi,
    price: 87,
    sideOptions: ["bread", "rice"],
    changes: ["tofu", "chicken"],
  },
  {
    name: "red farm",
    id: 2,
    ingredients: [],
    picture: redFarm,
    price: 64,
    sideOptions: ["bread"],
    changes: ["no jalapeno", "no teriyaki"],
  },
  {
    name: " ta la ma  ko",
    id: 3,
    ingredients: [],
    picture: taLaMaKo,
    price: 55,
    sideOptions: ["rice", "salad"],
    changes: ["no spicy", "no peanuts"],
  },
];
export default dishes;
