import padKi from "../images/pad-ki-mao.jpg";
import redFarm from "../images/red-farm.jpg";
import taLaMaKo from "../images/ta-la-ma-ko.jpg";
const dishes = [
  {
    name: "Pad Ki Mao",
    id: 1,
    ingredients: [
      "Green Papaya, Mango, Chukka Chili, Mint, Kaffir lime, Cashew, Akaya Cham sauce",
    ],
    picture: padKi,
    price: 87,
    sideOptions: ["bread", "rice"],
    changes: ["tofu", "chicken"],
  },
  {
    name: "Red Farm",
    id: 2,
    ingredients: [
      "Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass Magic Chili Brown Coconut",
    ],
    picture: redFarm,
    price: 64,
    sideOptions: ["bread", "rice"],
    changes: ["no jalapeno", "no teriyaki"],
  },
  {
    name: " Ta La Ma  Ko",
    id: 3,
    ingredients: ["Tofu, Spekkoek Peanuts, Spicy Manis, Pear Yakitori"],
    picture: taLaMaKo,
    price: 55,
    sideOptions: ["rice", "salad"],
    changes: ["no spicy", "no peanuts"],
  },
];
export default dishes;
