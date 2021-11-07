module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "Users",
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      profilePicture: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true,
    }
  );

  User.sync();
  return User;
};
