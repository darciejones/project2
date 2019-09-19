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
    return users;
  };

  