import claroPic from "../components/images/claro.jpg";
import kabKemPic from "../components/images/kab-kem.jpg";
import messaPic from "../components/images/messa.jpg";
import nithanPic from "../components/images/nithan-thai.jpg";
import tigerPic from "../components/images/tiger-lilly.jpg";
import yapanPic from "../components/images/ya-pan.jpg";

const restaurants = [
  {
    name: "Claro",
    id: 1,
    chef: "Ran Shmueli",
    menu: { breakfast: [1, 2, 3], lunch: [2], dinner: [3, 2] },
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
    menu: { breakfast: [2, 1, 3], lunch: [1], dinner: [3] },
    rating: 8.7,
    picture: messaPic,
    openTime: 13,
    closingTime: 23,
  },
  {
    name: "Nithan Thai",
    id: 4,
    chef: "Shahaf Shabtay",
    menu: { breakfast: [1, 2], lunch: [3, 2, 1], dinner: [2] },
    rating: 6.7,
    picture: nithanPic,
    openTime: 10,
    closingTime: 23,
  },
  {
    name: "Tiger Lilly",
    id: 5,
    chef: "Yanir Green",
    menu: { breakfast: [3, 2, 1], lunch: [2], dinner: [1, 3] },
    rating: 9.5,
    picture: tigerPic,
    openTime: 19,
    closingTime: 3,
  },
  {
    name: "Ya pan",
    id: 6,
    chef: "Yuval Ben Neriah",
    menu: { breakfast: [3], lunch: [1, 2, 3], dinner: [2, 1] },
    rating: 5.4,
    picture: yapanPic,
    openTime: 13,
    closingTime: 1,
  },
];
export default restaurants;
