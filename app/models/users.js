 module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    userName: DataTypes.STRING,
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, {
    freezeTableName: true
  }
  
  );

  
  users.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    users.hasMany(models.Product, {
      onDelete: "cascade"
    });
  };
  return users;
};
