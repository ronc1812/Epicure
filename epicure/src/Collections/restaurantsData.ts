import claroPic from "../images/claro.jpg";
import kabKemPic from "../images/kab-kem.jpg";
import messaPic from "../images/messa.jpg";
import nithanPic from "../images/nithan-thai.jpg";
import tigerPic from "../images/tiger-lilly.jpg";
import yapanPic from "../images/ya-pan.jpg";

const restaurants = [
  {
    name: "Claro",
    id: 1,
    chef: "ran shmueli",
    menu: { breakfast: [1], lunch: [2], dinner: [3] },
    rating: 9,
    picture: claroPic,
    openTime: 12,
    closingTime: 22,
  },
  {
    name: "Kab Kem",
    id: 2,
    chef: "Yariv Malili",
    menu: { breakfast: [2], lunch: [3], dinner: [1] },
    rating: 7.5,
    picture: kabKemPic,
    openTime: 17,
    closingTime: 1,
  },
  {
    name: "Messa",
    id: 3,
    chef: "Aviv Moshe",
    menu: { breakfast: [2], lunch: [1], dinner: [3] },
    rating: 8.7,
    picture: messaPic,
    openTime: 13,
    closingTime: 23,
  },
  {
    name: "Nithan Thai",
    id: 4,
    chef: "shahaf shabtay",
    menu: { breakfast: [1], lunch: [3], dinner: [2] },
    rating: 6.7,
    picture: nithanPic,
    openTime: 10,
    closingTime: 23,
  },
  {
    name: "Tiger Lilly",
    id: 5,
    chef: "Yanir Green",
    menu: { breakfast: [3], lunch: [2], dinner: [1] },
    rating: 9.5,
    picture: tigerPic,
    openTime: 19,
    closingTime: 3,
  },
  {
    name: "Ya pan",
    id: 6,
    chef: "Yuval Ben Neriah",
    menu: { breakfast: [3], lunch: [1], dinner: [2] },
    rating: 5.4,
    picture: yapanPic,
    openTime: 13,
    closingTime: 1,
  },
];
export default restaurants;
