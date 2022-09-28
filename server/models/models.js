const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Users = sequelize.define("users", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  role: { type: DataTypes.STRING, defaultValue: "USER" },
});

const Orders = sequelize.define("orders", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
});

const Tickets = sequelize.define("tickets", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
});

const FilmRooms = sequelize.define("film_rooms", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
  film_room_name: { type: DataTypes.STRING, allowNull: false },
});

const Seats = sequelize.define("seats", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true }, 
  number: {type: DataTypes.INTEGER, allowNull: false }
});

const Films = sequelize.define("films", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  info: { type: DataTypes.STRING, allowNull: false },
  genre: { type: DataTypes.STRING, allowNull: false },
  age_limit: { type: DataTypes.STRING, allowNull: false },
});

const FilmSessions = sequelize.define("film_sessions", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  datetime: { type: DataTypes.INTEGER, unique: true, allowNull: false },
});

const Ratings = sequelize.define("ratings", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  rate: { type: DataTypes.INTEGER, allowNull: false },
  comment: { type: DataTypes.STRING },
});

Users.hasMany(Ratings);
Ratings.belongsTo(Users);

Users.hasMany(Orders);
Orders.belongsTo(Users);

Orders.hasMany(Tickets);
Tickets.belongsTo(Orders);

Films.hasMany(FilmSessions);
FilmSessions.belongsTo(Films);

Ratings.hasMany(Films);
Films.belongsTo(Ratings);

FilmSessions.hasMany(Tickets);
Tickets.belongsTo(FilmSessions);

FilmRooms.hasMany(FilmSessions);
FilmSessions.belongsTo(FilmRooms);

FilmRooms.hasMany(Seats);
Seats.belongsTo(FilmRooms);

Seats.hasOne(Tickets);
Tickets.belongsTo(Seats);

module.exports = {
  Users,
  Films,
  Ratings,
  Orders,
  Tickets,
  Seats,
  FilmSessions,
  FilmRooms,
};
