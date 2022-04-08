const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define("user", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  email: { type: DataTypes.STRING },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Profile = sequelize.define("profile", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Basket = sequelize.define("basket", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
});

const Seat = sequelize.define("seat", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  row: { type: DataTypes.INTEGER, unique: true, allowNull: false },
  number: { type: DataTypes.INTEGER, unique: true, allowNull: false },
  price: { type: DataTypes.INTEGER, unique: true, allowNull: false },
});

const Film = sequelize.define("film", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true, allowNull: false },
  img: { type: DataTypes.STRING, unique: true, allowNull: false },
  time: { type: DataTypes.INTEGER, unique: true, allowNull: false },
  description: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Day = sequelize.define("day", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.INTEGER, unique: true, allowNull: false },
});

const Calendar = sequelize.define("calendar", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
});

const Rating = sequelize.define("rating", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
  comment: { type: DataTypes.STRING },
});

User.hasOne(Profile);
Profile.belongsTo(User);

Profile.hasOne(Basket);
Basket.belongsTo(Profile);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(Seat);
Seat.belongsTo(Basket);

Film.hasMany(Seat);
Seat.belongsTo(Film);

Rating.hasMany(Film);
Film.belongsTo(Rating);

Day.hasMany(Film);
Film.belongsTo(Day);

Calendar.hasMany(Day);
Day.belongsTo(Calendar);

module.exports = {
  User,
  Profile,
  Basket,
  Seat,
  Film,
  Rating,
  Day,
  Calendar,
};
