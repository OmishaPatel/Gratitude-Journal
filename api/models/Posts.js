module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define(
    "Posts",
    {
      desc: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      photo: {
        type: DataTypes.STRING,
      },
    },

    {
      timestamps: true,
    }
  );

  Post.sync();
  return Post;
};
