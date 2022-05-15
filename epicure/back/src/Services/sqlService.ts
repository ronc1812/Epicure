import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("Epicure", "root", "Rc@181299", {
  host: "localhost",
  dialect: "mysql",
});

export const Restaurant = sequelize.define(
  "restaurants",
  {
    restaurants_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    restaurant_chef: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    restaurant_rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    restaurant_image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "not defined!",
    },

    restaurant_open_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    restaurant_close_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    restaurant_menu: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    popular: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  { timestamps: false }
);
////////////////////////////////////////////////////////////
export const Dishes = sequelize.define(
  "dishes",
  {
    dish_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dish_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dish_ingredients: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    dish_image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "not defined!",
    },
    dish_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dish_options: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    dish_changes: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    dish_type: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    signature: {
      type: DataTypes.TINYINT,
      allowNull: true,
    },
  },
  { timestamps: false }
);
////////////////////////////////////////////////////////////
export const chefs = sequelize.define(
  "chefs",
  {
    chef_id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    chef_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    chef_restaurants: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);
